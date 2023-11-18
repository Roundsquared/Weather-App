let method = 'forecast';
const searchForm = document.getElementById('search-form')
const searchBox = document.getElementById('search-city'); 
let query;
let days = 3;
let dataChecker;
async function getTheWeather(method,query){
    const response = await fetch(`http://api.weatherapi.com/v1/${method}.json?key=7c5ae783336f49c7a99165328231411&q=${query}&days=${days}`,{mode: 'cors'});
    const json = await response.json();

    // Getting the json info for the user's location, forecast for the next 'X' days, and the current day's information
    const whereAmI = json.location;
    const forecast = json.forecast;
    const current = json.current;

    //Unpacking location data
    const city = whereAmI.name;
    const country = whereAmI.country;
    const region = whereAmI.region;
    const localTime = whereAmI.localtime;

    //Unpacking current temperature data
    const tempInFar = current.temp_f;
    const tempInCel = current.temp_c;
    const percievedFar = current.feelslike_f;
    const percievedCel = current.feelslike_c;
    const humidity = current.humidity;

    //Unpacking forecast data
    const forecastDays = forecast.forecastday;
    function getForecast(){
        let index;
        for(let day of forecastDays){
            index++
            const dateDisplay = day.date;
            const dayInfo = day.day;
            const dayMaxF = dayInfo.maxtemp_f;
            const dayMaxC = dayInfo.maxtemp_c;
            const dayMinF = dayInfo.mintemp_f;
            const dayMinC = dayInfo.mintemp_c;
            const weatherCon = dayInfo.condition;
        }
    }
    return getForecast();

}
document.getElementById('submit').addEventListener('click',(e)=>{
    e.preventDefault();
    query= searchBox.value;
    console.log(query);
    searchForm.reset();
    getTheWeather(method,query)
})