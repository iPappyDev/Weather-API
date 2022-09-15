async function search (){
    let key = "c710a823dc1b0f19bf90589d3135ce27"
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${userLocation.value}&appid=${key}&units=metric`
    let response = await fetch(endpoint)
    let jsonResponse = await response.json()
    console.log(jsonResponse)
    let icon = `http://openweathermap.org/img/wn/${jsonResponse.weather[0].icon}@2x.png`
    image.src = icon
    cityName.innerHTML = jsonResponse.name;
    degree.innerHTML = `${Math.round(jsonResponse.main.temp)}${"<sup>°</sup>"}C`
    condition.innerHTML = jsonResponse.weather[0].description;
    country.innerHTML = jsonResponse.sys.country
    longitude.innerHTML = jsonResponse.coord.lon
    latitude.innerHTML = jsonResponse.coord.lat
    cloud.innerHTML = `${jsonResponse.clouds.all}${"%"}`
    humidity.innerHTML = `${jsonResponse.main.humidity}${"%"}`
    pressure.innerHTML = jsonResponse.main.pressure
    wind.innerHTML = `${jsonResponse.wind.speed}${"Km/hr"}`
    gust.innerHTML = `${jsonResponse.wind.gust}${"Km/hr"}`
}

// const thisPage = ()=>{
//     const timeDisp = ()=>{
//     const time = new Date();

//     const hour = timeFormat((time.getHours()))
//     const minutes = timeFormat((time.getMinutes()))
//     const day = timeFormat((time.getDay()))
//     const month = timeFormat((time.getMonth()))
//     const year = timeFormat((time.getFullYear()))
//     clock.innerHTML = `<h3>Time ${hour}:${minutes}:${day} <br> ${day}:${month}:${year}</h3>`
//     }
//     setInterval(timeDisp, 1000);

//     const timeFormat = (timer)=>{
//         if(timer<10){
//         return '0'+timer
//         }
//         else{
//             return timer
//         }
//     }
// }
