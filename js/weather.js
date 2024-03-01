const Apikey = `BpXAYzFyuWMOYM7hY311WUuME9U348yl`

const getCityUrl = cityName => 
`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${Apikey}&q=${cityName}`

const getWeatherUrl = cityKey => 
`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${Apikey}&language=pt-br`



const fetchData = async url => {
try {
    const response = await fetch(url) 


if(!response.ok){
    throw new Error('não foi possivel fazer essa bagaça')
}

return  await response.json()

} catch ({name, messege}) {
    alert(`${name}: ${messege}`)
}
}

const getCityData = cityName => fetchData(getCityUrl(cityName))

const getWeatherData = async cityKey => await fetchData(getWeatherUrl(cityKey))












