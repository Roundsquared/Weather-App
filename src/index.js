import { updateScreen } from "./DOM";
import './style.css';

export let query;

const searchButton = document.getElementById('search-submit');
const searchBar = document.getElementById('search-input');
const searchForm = document.getElementById('search-form');

searchButton.addEventListener('click',(e)=>{
    e.preventDefault();
    query = searchBar.value;
    searchForm.reset();
    updateScreen();
})

export async function getTheWeather(query){
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7c5ae783336f49c7a99165328231411&q=${query}&days=3`,{mode: 'cors'});
    const json = await response.json();

    const whereAmI = json.location;
    const forecast = json.forecast;
    const current = json.current;

    const localInfo =[]
    const currentCity = whereAmI.name;
    const currentCountry = whereAmI.country;
    const currentRegion = whereAmI.region;
    const currentLocalTime = whereAmI.localtime;
    localInfo.push(currentCity,currentCountry,currentRegion,currentLocalTime)

    const forecastDays = forecast.forecastday;
   
    const currentAstro = forecastDays[0].astro;
    const tempInFar = current.temp_f;
    const tempInCel = current.temp_c;
    const percievedFar = current.feelslike_f;
    const percievedCel = current.feelslike_c;
    const maxTempF = forecastDays[0].day.maxtemp_f;
    const minTempF = forecastDays[0].day.mintemp_f;
    const maxTempC = forecastDays[0].day.maxtemp_c;
    const minTempC = forecastDays[0].day.mintemp_c;
    const humidity = current.humidity;
    const conditionText = current.condition.text;
    const conditionCode = current.condition.code;
    const sunrise = currentAstro.sunrise;
    const sunset = currentAstro.sunset;
    const windF = current.wind_mph;
    const windC = current.wind_kph;
    const cloud = current.cloud;
    const rainChance = forecastDays[0].day.daily_chance_of_rain;
    const moonphase = forecastDays[0].astro.moon_phase;
    const dayOrNo = current.is_day;
    const uv = current.uv;

    const biggerArray=[];
    const currentArray=[];
    const forecastArray =[];

    function getCurrent (){
        currentArray.length=0
        currentArray.push(tempInFar,tempInCel,percievedFar,percievedCel,humidity,conditionText,conditionCode,sunrise,sunset,windF,windC,cloud,rainChance,dayOrNo,uv,moonphase,maxTempF,minTempF,maxTempC,minTempC)
        return currentArray;
    }
    
    function daily(){
        let dayCount=0;
        forecastArray.length=0;
        for(let day of forecastDays){
        const dayArray=[];
        const hourHolder=[];
        dayCount++
      
        const dayDate = day.date_epoch;
        const dayInfo = day.day;
        const hourlyInfo = day.hour;

        const forecastMaxF = dayInfo.maxtemp_f;
        const forecastMaxC = dayInfo.maxtemp_c;
        const forecastMinF = dayInfo.mintemp_f;
        const forecastMinC = dayInfo.mintemp_c;
        const forecastConText = dayInfo.condition.text;
        const forecastConCode = dayInfo.condition.code;
        function hourly(){
            for(let hour of hourlyInfo){
            const hourArray=[];
            const hourlyTime = hour.time_epoch;
            const hourlyTempF = hour.temp_f;
            const hourlyTempC = hour.temp_c;
            const hourlyFeelsF = hour.feelslike_f;
            const hourlyFeelsC = hour.feelslike_c;
            const hourlyConText = hour.condition.text;
            const hourlyConCode = hour.condition.code;
            const hourlyCloud = hour.cloud;
            const hourlyHumidity = hour.humidity;
            const hourlyRainChance = hour.chance_of_rain;
            hourArray.push(hourlyTempF,hourlyTempC,hourlyFeelsF,hourlyFeelsC,hourlyConText,hourlyConCode,hourlyRainChance,hourlyHumidity,hourlyCloud,hourlyTime)
            hourHolder.push(hourArray)
            }
            dayArray.push(dayDate,forecastMaxF,forecastMaxC,forecastMinF,forecastMinC,forecastConText,forecastConCode,hourHolder);
        }
        forecastArray.push(dayArray)
        hourly();
        }
        return forecastArray;
    }

    daily();
    getCurrent();
    
    biggerArray.length=0;
    biggerArray.push(localInfo,currentArray,forecastArray)
    return biggerArray
}
