async function getTheWeather(query){
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7c5ae783336f49c7a99165328231411&q=${query}&days=3`,{mode: 'cors'});
    const json = await response.json();

    const whereAmI = json.location;
    const forecast = json.forecast;
    const current = json.current;

    const currentCity = whereAmI.name;
    const currentCountry = whereAmI.country;
    const currentRegion = whereAmI.region;
    const currentLocalTime = whereAmI.localtime;

    const forecastDays = forecast.forecastday;
   
    const currentAstro = forecastDays[0].astro;
    const tempInFar = current.temp_f;
    const tempInCel = current.temp_c;
    const percievedFar = current.feelslike_f;
    const percievedCel = current.feelslike_c;
    const humidity = current.humidity;
    const conditionText = current.condition.text;
    const conditionCode = current.condition.code;
    const sunrise = currentAstro.sunrise;
    const sunset = currentAstro.sunset;
    const windF = current.wind_mph;
    const windC = current.wind_kph;
    const cloud = current.cloud;
    const rainChance = forecastDays[0].chance_of_rain;
    const dayOrNo = current.isday;
    const uv = current.uv;

    function daily(){
        let dayCount=0;
        const forecastArray =[];
        for(let day of forecastDays){
        const dayArray=[];
        const hourHolder=[];
        dayCount++
        let hourCount=0;
        const dayDate = day.date;
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
            hourCount++
            const hourlyTempF = hour.temp_f;
            const hourlyTempC = hour.temp_c;
            const hourlyFeelsF = hour.feelslike_f;
            const hourlyFeelsC = hour.feelslike_c;
            const hourlyConText = hour.condition.text;
            const hourlyConCode = hour.condition.code;
            const hourlyCloud = hour.cloud;
            const hourlyHumidity = hour.humidity;
            const hourlyRainChance = hour.chance_of_rain;
            hourArray.push(hourlyTempF,hourlyTempC,hourlyFeelsF,hourlyFeelsC,hourlyConText,hourlyConCode,hourlyRainChance,hourlyHumidity,hourlyCloud)
            hourHolder.push(hourArray)
            }
            dayArray.push(forecastMaxF,forecastMaxC,forecastMinF,forecastMinC,forecastConText,forecastConCode,hourHolder);
        }
        forecastArray.push(dayArray)
        hourly();
        }
        console.log(forecastArray)
    }
    function returnVariables(){
        return(whereAmI,forecast,current,currentCity,currentCountry,currentRegion,currentLocalTime,forecastDays,currentAstro,tempInFar,tempInCel,percievedFar,percievedCel,humidity,conditionText,conditionCode,sunrise,sunset,windF,windC,cloud,rainChance,dayOrNo,uv)
    }
    daily();
}
getTheWeather('macon');