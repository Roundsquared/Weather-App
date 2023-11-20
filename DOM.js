function updateScreen(){
    const currentCondition = document.querySelector('.current');
    const currentTemp = document.querySelector('.current-temp');
    const conditionIcon = document.querySelector('.condition-icon');
    const conditionTextDOM = document.querySelector('.condition-temp');
    const currentFeels = document.querySelector('current-feelslike');
    
    const highLow = document.querySelector('.high-low');
    const precip = document.querySelector('.precip');
    const humidity = document.querySelector('.humidity');
    const wind = document.querySelector('.wind');
    const cloud = document.querySelector('.cloud');
    const uv = document.querySelector('.uv-index');
    const sunrise = document.querySelector('.sunrise');
    const sunset = document.querySelector('.sunset');
    const moonphase = document.querySelector('.moonphase');
    
    const day0 = document.querySelector('.day0');
    const day1 = document.querySelector('.day1');
    const day2 = document.querySelector('.day2');
    
    const hourlyMenu = document.querySelector('.hourly-scroll')

    currentTemp.textContent = tempInFar;
    conditionTextDOM.textContent=conditionText
    currentFeels.textContent = percievedFar;

    
}
