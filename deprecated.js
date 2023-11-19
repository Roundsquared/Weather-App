let city = prompt('Enter a city');
let method;
let query;
let locationV;
let forecast;
let astro;
const button = document.getElementById('testbutton')
async function requestWeather(city){
    const place = city;
    const currentWeather = await fetch(`http://api.weatherapi.com/v1/current.json?key=7c5ae783336f49c7a99165328231411&q=${place}`, {mode: 'cors'});
    const currentWeatherJSON = await currentWeather.json();
    const farenheit = currentWeatherJSON.current.temp_f;
    console.log('It is: '+farenheit+' degrees Farenheit in '+ place)
}
button.addEventListener('click',()=>{

requestWeather(city);
})

async function weatherMethodHandler(method,query){
    const weatherMethod = await fetch(`http://api.weatherapi.com/v1/${method}.json?key=7c5ae783336f49c7a99165328231411&q=${query}`,{mode: 'cors'});
    const weatherMethodJSON = await weatherMethod.json();
     locationV = weatherMethodJSON.location
     forecast = weatherMethodJSON.forecast
     day = forecast.forecastday[0]
     astro = day.astro
     hours = day.hour
     return (console.log(forecast) + console.log(astro) + console.log(hours))
}
const form = document.getElementById('methodForm')
document.getElementById('submit').addEventListener('click',(e)=>{
    e.preventDefault();
    const methodList= document.getElementsByName('method');
    for(let i=0;i<methodList.length;i++){
        if(methodList[i].checked){
            method=methodList[i].value;
        }
    }
    console.log(method)
    checkIfIp()
    console.log(query)
    form.reset()
})
function checkIfIp(){
    if(method==='ip'){
        query='auto:ip'
    }
    else{
        query=city
    }
}
document.getElementById('testbutton2').addEventListener('click',()=>{
    weatherMethodHandler(method,query)
})

function getUserWeatherbyIP(){
    weatherMethodHandler(ip,'auto:ip')
}
document.getElementById('testbutton3').addEventListener('click',()=>{
    getWeatherBySearch()
})
function getWeatherBySearch(){
    weatherMethodHandler(method,query)
}
