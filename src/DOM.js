import { getTheWeather } from ".";

export async function updateScreen(){
    const test = await getTheWeather('auckland');

    const currentPack = test[0];
    const forecastPack = test[1];

    const currentTempDOM = document.querySelector('.current-temp');
    const conditionIconDOM = document.querySelector('.condition-icon');
    const conditionTextDOM = document.querySelector('.condition-text');
    const currentFeelsDOM = document.querySelector('.current-feelslike');
    
    const highLowDOM = document.querySelector('.high-low');
    const highLowTitle = document.createElement('h6');
    const highLowContent = document.createElement('h5');
    highLowTitle.textContent = 'High/Low';
    highLowContent.textContent = currentPack[16]+ '°/' + currentPack[17] + '°';
    highLowDOM.append(highLowTitle,highLowContent)

    const precipDOM = document.querySelector('.precip');
    const precipTitle = document.createElement('h6');
    const precipContent = document.createElement('h5');
    precipTitle.textContent = 'Precipitation';
    precipContent.textContent = currentPack[12] + '%';
    precipDOM.append(precipTitle,precipContent);

    const humidityDOM = document.querySelector('.humidity');
    const humidityTitle = document.createElement('h6');
    const humidityContent = document.createElement('h5');
    humidityTitle.textContent = 'Humidity';
    humidityContent.textContent = currentPack[4] + '%';
    humidityDOM.append(humidityTitle,humidityContent);

    const windDOM = document.querySelector('.wind');
    const windTitle = document.createElement('h6');
    const windContent = document.createElement('h5');
    windTitle.textContent = 'Wind';
    windContent.textContent = currentPack[9];
    windDOM.append(windTitle,windContent);

    const cloudDOM = document.querySelector('.cloud');
    const cloudTitle = document.createElement('h6');
    const cloudContent = document.createElement('h5');
    cloudTitle.textContent = 'Cloud cover';
    cloudContent.textContent = currentPack[11] + '%';
    cloudDOM.append(cloudTitle,cloudContent);

    const uvDOM = document.querySelector('.uv-index');
    const uvTitle = document.createElement('h6');
    const uvContent = document.createElement('h5');
    uvTitle.textContent = 'UV Index';
    uvContent.textContent = `${currentPack[14]}/11`;
    uvDOM.append(uvTitle,uvContent);

    const sunriseDOM = document.querySelector('.sunrise');
    const sunriseTitle = document.createElement('h6');
    const sunriseContent = document.createElement('h5');
    sunriseTitle.textContent = 'Sunrise';
    sunriseContent.textContent = currentPack[7];
    sunriseDOM.append(sunriseTitle,sunriseContent);

    const sunsetDOM = document.querySelector('.sunset');
    const sunsetTitle = document.createElement('h6');
    const sunsetContent = document.createElement('h5');
    sunsetTitle.textContent = 'Sunset';
    sunsetContent.textContent = currentPack[8];
    sunsetDOM.append(sunsetTitle,sunsetContent);

    const moonphaseDOM = document.querySelector('.moonphase');
    const moonphaseTitle = document.createElement('h6');
    const moonphaseContent = document.createElement('h5');
    moonphaseTitle.textContent = 'Moonphase';
    moonphaseContent.textContent = currentPack[15];
    moonphaseDOM.append(moonphaseTitle,moonphaseContent);

    const hourlyMenuDOM = document.querySelector('.hourly-scroll');


    currentTempDOM.textContent = 'Temperature:' + currentPack[0];
    conditionTextDOM.textContent = 'Condition: ' + currentPack[5];
    currentFeelsDOM.textContent = 'Feels like: ' + currentPack[2];
    

    function displayForecast(){
        let index=0;
        const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        
        for(let day of forecastPack){
            const dayTest = new Date(0);
            const offset = dayTest.getTimezoneOffset()
            dayTest.setUTCSeconds(day[0]+(offset*60));
            const whatDay = days[dayTest.getDay()]
            const dayDom = document.querySelector(`.day${index}`);
            const myid=index;
            const date = document.createElement('div');
                if(index===0){
                    date.textContent = 'Today';
                }else{
                    date.textContent = whatDay;
                }
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
