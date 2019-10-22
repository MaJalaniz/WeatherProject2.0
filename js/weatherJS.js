window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let timeZone = document.querySelector('.location-timezone');


    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';

            fetch(apiKey)
        .then(data => {
            return data.json();
        })
        .then(data => {
            console.log(data);
            const { temperature, summary } = data.currently;

            temperatureDegree.textContent = temperature;
            temperatureDescription.textContent = summary;
            timeZone.textContent = data.timezone;
        })
        });
        
    }


});