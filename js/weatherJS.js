window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let timeZone = document.querySelector('.location-timezone');
    let temperatureSection = document.querySelector('.temperature')
    const temperatureSpan = document.querySelector('.temperature span');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const apiKey = `your api key here!`;

            fetch(apiKey)
        .then(data => {
            return data.json();
        })
        .then(data => {
            console.log(data);
            const { temperature, summary, icon } = data.currently;

            temperatureDegree.textContent = temperature;
            temperatureDescription.textContent = summary;
            timeZone.textContent = data.timezone;

            let celsius = (temperature - 32) * (5 / 9);

            setIcons(icon, document.querySelector('.icon'))

            temperatureSection.addEventListener("click", () => {
                if(temperatureSpan.textContent === "F"){
                    temperatureSpan.textContent = "C";
                    temperatureDegree.textContent = Math.floor(celsius);
                }else{
                    temperatureSpan.textContent = "F";
                    temperatureDegree.textContent = temperature;
                }
            })
        });
        });
        
    }

function setIcons(icon, iconID){
    const skycons = new Skycons({color: "white"});
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon])
}
});