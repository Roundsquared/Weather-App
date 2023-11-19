let method = 'forecast';
const searchForm = document.getElementById('search-form')
const searchBox = document.getElementById('search-city'); 
let query='macon';
let days = 3;
let dataChecker;
const forecastBody = document.querySelector('.forecast');
const tempText = document.querySelector('.tempText');
const tempNumber = document.querySelector('.tempNumber');
const city = document.querySelector('.city');
const state = document.querySelector('.state');
const country = document.querySelector('.country');
async function getTheWeather(method,query){
    const response = await fetch(`http://api.weatherapi.com/v1/${method}.json?key=7c5ae783336f49c7a99165328231411&q=${query}&days=${days}`,{mode: 'cors'});
    const json = await response.json();

    // Getting the json info for the user's location, forecast for the next 'X' days, and the current day's information
    const whereAmI = json.location;
    const forecast = json.forecast;
    const current = json.current;

    //Unpacking location data
    const currentCity = whereAmI.name;
    const currentCountry = whereAmI.country;
    const currentRegion = whereAmI.region;
    const currentLocalTime = whereAmI.localtime;

    city.textContent = currentCity;
    state.textContent = currentRegion;
    country.textContent = currentCountry;

    //Unpacking current temperature data
    const tempInFar = current.temp_f;
    const tempInCel = current.temp_c;
    const percievedFar = current.feelslike_f;
    const percievedCel = current.feelslike_c;
    const humidity = current.humidity;
    const currentCon = current.condition.text

    tempText.textContent = currentCon;
    tempNumber.textContent = tempInFar +'°F';

    //Unpacking forecast data
    const forecastDays = forecast.forecastday;
    function getForecast(){
        forecastBody.textContent=''
        for(let day of forecastDays){
            const dateDisplay = day.date;
            const dayInfo = day.day;
            const dayMaxF = dayInfo.maxtemp_f;
            const dayMaxC = dayInfo.maxtemp_c;
            const dayMinF = dayInfo.mintemp_f;
            const dayMinC = dayInfo.mintemp_c;
            const weatherCon = dayInfo.condition;
            const riskOfRain = dayInfo.daily_chance_of_rain;
            const dayCondition = weatherCon.text;
            const dayIcon = weatherCon.icon;

            
            const foreCard = document.createElement('div');
            foreCard.setAttribute('class','foreCard');

            const maxTemp = document.createElement('div');
            maxTemp.textContent = 'Max: ' + dayMaxF;

            const minTemp = document.createElement('div');
            minTemp.textContent = 'Min: ' + dayMinF;

            const rainChance = document.createElement('div');
            rainChance.textContent = 'Rain Chance: ' + riskOfRain +'%';

            const foreCon = document.createElement('div');
            foreCon.textContent = 'Condition: ' + dayCondition;

            const foreIcon = document.createElement('img');
            

            foreCard.append(maxTemp,minTemp,rainChance,foreCon,foreIcon)
            forecastBody.appendChild(foreCard);

        }
    }
    return getForecast(),console.log(forecastDays[0]);

}
document.getElementById('submit').addEventListener('click',(e)=>{
    e.preventDefault();
    query= searchBox.value;
    console.log(query);
    searchForm.reset();
    getTheWeather(method,query)
})
addEventListener("DOMContentLoaded",()=>{
    getTheWeather(method,query)
})