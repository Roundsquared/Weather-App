import { getTheWeather } from ".";

export async function updateScreen(){
    const test = await getTheWeather('macon');

    const currentPack = test[0];
    const forecastPack = test[1];

    const currentTempDOM = document.querySelector('.current-temp');
    const conditionIconDOM = document.querySelector('.condition-icon');
    const conditionTextDOM = document.querySelector('.condition-text');
    const currentFeelsDOM = document.querySelector('.current-feelslike');
    
    const highLowDOM = document.querySelector('.high-low');
    const precipDOM = document.querySelector('.precip');
    const humidityDOM = document.querySelector('.humidity');
    const windDOM = document.querySelector('.wind');
    const cloudDOM = document.querySelector('.cloud');
    const uvDOM = document.querySelector('.uv-index');
    const sunriseDOM = document.querySelector('.sunrise');
    const sunsetDOM = document.querySelector('.sunset');
    const moonphaseDOM = document.querySelector('.moonphase');
    
    const day0DOM = document.querySelector('.day0');
    const day1DOM = document.querySelector('.day1');
    const day2DOM = document.querySelector('.day2');
    
    const hourlyMenuDOM = document.querySelector('.hourly-scroll')

    currentTempDOM.textContent = 'Temperature:' + currentPack[0];
    conditionTextDOM.textContent = 'Condition: ' + currentPack[5];
    currentFeelsDOM.textContent = 'Feels like: ' + currentPack[2];
    highLowDOM.textContent = 'Max: ' + currentPack[16] +'/ Min: ' +currentPack[17];
    precipDOM.textContent ='Precipitation:'+ currentPack[12];
    humidityDOM.textContent ='Humidity:' + currentPack[4];
    windDOM.textContent ='Wind:' + currentPack[9];
    cloudDOM.textContent = 'Cloud cover: ' + currentPack[11];
    uvDOM.textContent = 'UV Index: ' +currentPack[14];
    sunriseDOM.textContent = 'Sunrise: ' + currentPack[7];
    sunsetDOM.textContent = 'Sunset: ' + currentPack[8];
    moonphaseDOM.textContent = 'Moon phase: ' + currentPack[15];

    function displayForecast(){
        let index=0;
        for(let day of forecastPack){
            const dayDom = document.querySelector(`.day${index}`);
            const myid=index;
            const date = document.createElement('div');
            date.textContent = day[0];
            const maxTemp = document.createElement('div');
            maxTemp.textContent = day[1];
            const minTemp = document.createElement('div');
            minTemp.textContent = day[3];
            const condition = document.createElement('div');
            condition.textContent = day[5];
            const hourly = day[7];
            dayDom.append(date,maxTemp,minTemp,condition)
            dayDom.addEventListener('click',()=>{
                hourlyMenuDOM.textContent=""
                for(let hour of hourly){
                    const hourHolder = document.createElement('div');
                    hourHolder.setAttribute('class','card');

                    const hourlyTemp = document.createElement('div');
                    hourlyTemp.textContent = hour[0];

                    const hourlyFeels = document.createElement('div');
                    hourlyFeels.textContent = hour[2];

                    const hourlyCondition = document.createElement('div');
                    hourlyCondition.textContent = hour[4];

                    const hourlyRainChance = document.createElement('div');
                    hourlyRainChance.textContent = hour[6];

                    const hourlyHumidity = document.createElement('div');
                    hourlyHumidity.textContent = hour[7];

                    const hourlyCloud = document.createElement('div');
                    hourlyCloud.textContent = hour[8];

                    hourHolder.append(hourlyTemp,hourlyFeels,hourlyCondition,hourlyRainChance,hourlyHumidity,hourlyCloud)

                    hourlyMenuDOM.appendChild(hourHolder)

                }
                console.log(myid) 
            })
            index++
        }
    }
    displayForecast();
}
