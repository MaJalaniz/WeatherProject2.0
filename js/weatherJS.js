window.addEventListener('load', () => {
    let long;
    let lat;

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
        })
        });
        
    }


});