const apikey = '3cd6ed61394eac49f5db2187547d4f8e'
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const searchweather = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
async function getweather(city){
    const response = await fetch(apiurl +city+ `&appid=${apikey}`)
    var data = await response.json()
    console.log(data)
    document.querySelector('.cityname').innerHTML=data.name
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+"°c"
    document.querySelector('.humidity').innerHTML=Math.round(data.main.humidity)+'%'
    document.querySelector('.windspeed').innerHTML=data.wind.speed+' km/h'
    if(data.weather[0].main=='Clouds'){
        document.querySelector('.weather-data img').src='images/clouds.png'
    }
    else if(data.weather[0].main=='Clear'){
         document.querySelector('.weather-data img').src='images/clear.png'
     }
     else if(data.weather[0].main=='Drizzle'){
         document.querySelector('.weather-data img').src='images/drizzle.png'
     }
     else if(data.weather[0].main=='Snow'){
        document.querySelector('.weather-data img').src='images/snow.png'
    }
    else if(data.weather[0].main=='Rain'){
        document.querySelector('.weather-data img').src='images/rain.png'
    }
    else if(data.weather[0].main=='Mist'){
        document.querySelector('.weather-data img').src='images/mist.png'
    }
    else if(data.weather[0].main=='Smoke'){
        document.querySelector('.weather-data img').src='images/clouds.png'
    }
}
searchbtn.addEventListener('click', function(event){
    event.preventDefault()
    getweather(searchweather.value)
})
searchweather.addEventListener('keypress', function(event){
if(event.key=='Enter'){
    event.preventDefault()
    getweather(searchweather.value)
}
})
