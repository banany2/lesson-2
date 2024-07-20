async function getWeather() {
    const apiKey = '5a0edee8c31a54a21752c521198fbd81'
    const city = 'Odessa'
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`;

    fetch(url)
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            console.log(data)
            let imgSrc = `https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png`
            document.querySelector('.city-name').innerHTML = data.name
            document.querySelector('.degrees').innerHTML = `${Math.round(data.main.temp)}&deg;C`
            document.querySelector('.weather-description').innerHTML = data.weather[0]['description']
            document.querySelector('.img-src').innerHTML = `<img src="${imgSrc}">`
        })

        .catch(function (error) {
            console.log(error)
        })

}
getWeather()