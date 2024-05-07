const temp = document.querySelector("#temperature").textContent;
const speed = document.querySelector("#windSpeed").textContent;
const chill = document.querySelector("#windChill");

function calculateWindChill(temperature, windSpeed) {

    if(temperature <= 10 && windSpeed > 4.8){
        return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1);
    }
    else{
        return `N/A`
    }
}

const windChillNum = calculateWindChill(temp, speed);
chill.textContent = windChillNum;