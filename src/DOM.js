import { getTheWeather } from ".";
import { query } from ".";
 
export async function updateScreen(){
    
    const test = await getTheWeather(query);

    const localPack = test[0];
    const currentPack = test[1];
    const forecastPack = test[2];

    console.log(localPack)
    const locationDOM = document.querySelector('.location');
    const cityDOM = document.querySelector('.city');
    cityDOM.textContent = localPack[0];
    const region = document.querySelector('.region');
    region.textContent = localPack[2];
    const country = document.querySelector('.country');
    country.textContent = localPack[1];
    const localTime = document.querySelector('.time');
    localTime.textContent = localPack[3];

    const currentTempDOM = document.querySelector('.current-temp');
    const conditionIconDOM = document.querySelector('.condition-icon');
    const conditionTextDOM = document.querySelector('.condition-text');
    const currentFeelsDOM = document.querySelector('.current-feelslike');

    currentTempDOM.textContent = currentPack[0] + '°';
    conditionTextDOM.textContent = currentPack[5];
    currentFeelsDOM.textContent = 'Feels like: ' + currentPack[2] + '°';
    
    const highLowDOM = document.querySelector('.high-low');
    highLowDOM.textContent = '';
    const highLowTitle = document.createElement('h6');
    const highLowContent = document.createElement('h5');
    highLowTitle.textContent = 'High/Low';
    highLowContent.textContent = currentPack[16]+ '°/' + currentPack[17] + '°';
    highLowDOM.append(highLowTitle,highLowContent)

    const precipDOM = document.querySelector('.precip');
    precipDOM.textContent = '';
    const precipTitle = document.createElement('h6');
    const precipContent = document.createElement('h5');
    precipTitle.textContent = 'Precipitation';
    precipContent.textContent = currentPack[12] + '%';
    precipDOM.append(precipTitle,precipContent);

    const humidityDOM = document.querySelector('.humidity');
    humidityDOM.textContent = '';
    const humidityTitle = document.createElement('h6');
    const humidityContent = document.createElement('h5');
    humidityTitle.textContent = 'Humidity';
    humidityContent.textContent = currentPack[4] + '%';
    humidityDOM.append(humidityTitle,humidityContent);

    const windDOM = document.querySelector('.wind');
    windDOM.textContent = '';
    const windTitle = document.createElement('h6');
    const windContent = document.createElement('h5');
    windTitle.textContent = 'Wind';
    windContent.textContent = currentPack[9];
    windDOM.append(windTitle,windContent);

    const cloudDOM = document.querySelector('.cloud');
    cloudDOM.textContent = '';
    const cloudTitle = document.createElement('h6');
    const cloudContent = document.createElement('h5');
    cloudTitle.textContent = 'Cloud cover';
    cloudContent.textContent = currentPack[11] + '%';
    cloudDOM.append(cloudTitle,cloudContent);

    const uvDOM = document.querySelector('.uv-index');
    uvDOM.textContent = '';
    const uvTitle = document.createElement('h6');
    const uvContent = document.createElement('h5');
    uvTitle.textContent = 'UV Index';
    uvContent.textContent = `${currentPack[14]}/11`;
    uvDOM.append(uvTitle,uvContent);

    const sunriseDOM = document.querySelector('.sunrise');
    sunriseDOM.textContent = '';
    const sunriseTitle = document.createElement('h6');
    const sunriseContent = document.createElement('h5');
    sunriseTitle.textContent = 'Sunrise';
    sunriseContent.textContent = currentPack[7];
    sunriseDOM.append(sunriseTitle,sunriseContent);

    const sunsetDOM = document.querySelector('.sunset');
    sunsetDOM.textContent = '';
    const sunsetTitle = document.createElement('h6');
    const sunsetContent = document.createElement('h5');
    sunsetTitle.textContent = 'Sunset';
    sunsetContent.textContent = currentPack[8];
    sunsetDOM.append(sunsetTitle,sunsetContent);

    const moonphaseDOM = document.querySelector('.moonphase');
    moonphaseDOM.textContent = '';
    const moonphaseTitle = document.createElement('h6');
    const moonphaseContent = document.createElement('h5');
    moonphaseTitle.textContent = 'Moon phase';
    moonphaseContent.textContent = currentPack[15];
    moonphaseDOM.append(moonphaseTitle,moonphaseContent);

    const hourlyMenuDOM = document.querySelector('.hourly-scroll');

    function displayForecast(){
        let index=0;
        const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        
        for(let day of forecastPack){
            const dayTest = new Date(0);
            const offset = dayTest.getTimezoneOffset()
            dayTest.setUTCSeconds(day[0]+(offset*60));
            const whatDay = days[dayTest.getDay()]
            const dayDom = document.querySelector(`.day${index}`);
            dayDom.textContent='';
            const myid=index;
            const date = document.createElement('h6');
                if(index===0){
                    date.textContent = 'Today';
                }else{
                    date.textContent = whatDay;
                }
            const maxTemp = document.createElement('span');
            maxTemp.setAttribute('class','high');
            maxTemp.textContent = day[1] + '°';
            const minTemp = document.createElement('span');
            minTemp.setAttribute('class','low');
            minTemp.textContent = '/' + day[3]+'°';
            const condition = document.createElement('div');
            condition.textContent = day[5];
            const hourly = day[7];
            dayDom.append(date,maxTemp,minTemp,condition)
            dayDom.addEventListener('click',()=>{
                hourlyMenuDOM.textContent=""
                for(let hour of hourly){
                    const hourTest = new Date(0);
                    hourTest.setUTCSeconds(hour[9])

                    const hourHolder = document.createElement('div');
                    hourHolder.setAttribute('class','card');

                    const hourlyTime = document.createElement('h4');
                    hourlyTime.textContent = hourTest.getHours() +':00';
                    hourlyTime.setAttribute('class','forecast-time')

                    const hourlyTemp = document.createElement('h5');
                    hourlyTemp.textContent = hour[0] + '°';

                    const hourlyCondition = document.createElement('h6');
                    hourlyCondition.textContent = hour[4];

                    const hourlyRainChance = document.createElement('h6');
                    hourlyRainChance.textContent = hour[6] + '%';

                    hourHolder.append(hourlyTime,hourlyTemp,hourlyCondition,hourlyRainChance)

                    hourlyMenuDOM.appendChild(hourHolder)


                }
            })
            index++
        }
    }
    displayForecast();

   
}
