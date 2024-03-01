const form = document.querySelector('[data-js="change-location"]')
let cityTime = document.querySelector('[data-js="time"]')
const cityName = document.querySelector('[data-js="city-name"]')
const cityTemperature = document.querySelector('[data-js="city-temperature"]')
const cityWeather = document.querySelector('[data-js="city-weather"]')
const cityCard = document.querySelector('[data-js="city-card"]')
const cityIcon = document.querySelector('[data-js="time-icon"]')
const satellite = document.querySelector('[data-js="satellite"]')
const cityBody = document.querySelector('[data-js="city-body"]')

const addOrRemove = (item, class1, class2) => {
    if(Array.from(item.classList).includes(class1)) {
    item.classList.remove(class1)
    item.classList.add(class2)
    }

} 

const isDay = (cityTime, satellite, cityBody) => {
    cityTime.src = `./src/day.svg`
    addOrRemove(satellite, 'fa-moon', 'fa-sun')
    addOrRemove(cityBody, 'body-city-moon', 'body-city-sun')
    return
}


const isNight = (cityTime, satellite, cityBody) => {
    cityTime.src = `./src/night.svg`
    addOrRemove(satellite, 'fa-sun', 'fa-moon')
    addOrRemove(cityBody, 'body-city-sun', 'body-city-moon')
    return
}



form.addEventListener('submit', async event => {
    event.preventDefault()

const inputValue = event.target.city.value 
const [{Key,LocalizedName}] = await getCityData(inputValue)
const [{IsDayTime, Temperature, WeatherIcon, WeatherText}] = await getWeatherData(Key)

const isDayOrNight = IsDayTime 
? isDay(cityTime, satellite, cityBody)
: isNight(cityTime, satellite, cityBody)

addOrRemove(cityCard, 'd-none')

cityTemperature.textContent = Temperature.Metric.Value
cityName.textContent = LocalizedName
cityWeather.textContent = WeatherText
cityIcon.innerHTML = `<img src="./src/icons/${WeatherIcon}.svg">`


form.reset()
})




























// const form = document.querySelector('[data-js="change-location"]')
// const getCityWeather = document.querySelector('[data-js="city-weather"]')
// const getCityName = document.querySelector('[data-js="city-name"]')
// const getCityTemperatura = document.querySelector('[data-js="city-tempeture"]')
// let isDay = document.querySelector('[data-js="time"]')
// const cityCard = document.querySelector('[data-js="city-card"]') 
// const timeIconContainer = document.querySelector('[data-js="time-icon"]')

// form.addEventListener('submit', async event =>{
//     event.preventDefault()

// const inputValue = event.target.city.value 
// const [{Key, LocalizedName}] = await getCityData(inputValue)
// const [{WeatherIcon, Temperature, WeatherText, IsDayTime}] = await getWeatherCity(Key)

// const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg">`

// const  confirmationImg = cityCard.classList.contains('d-none') 
// ? cityCard.classList.remove('d-none')
// : cityCard.classList.add('d-none')

// const  timeCondition = IsDayTime 
// ? isDay.src = './src/day.svg' 
// : isDay.src = './src/night.svg'


// timeIconContainer.innerHTML = timeIcon
// getCityWeather.textContent = WeatherText
// getCityName.textContent = LocalizedName
// getCityTemperatura.textContent = Temperature.Metric.Value


// form.reset()
// })