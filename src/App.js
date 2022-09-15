import CurrentWeather from './components/CurrentWeather';
import Search from './components/Search'
import { WEATHER_API_URL, WEATHER_API_KEY } from './api/api';
import { useState } from 'react';
import Forecast from './components/Forecast';

const App = () => {

  const [currentWeather, setCurrentWeather] = useState(null)
  const [currentForecast, setCurrentForecast] = useState(null)

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ")

    const currentWeather = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const currentForcast = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([currentWeather, currentForcast])
    .then(async (res) => {
      const weatherRes = await res[0].json()
      const ForecastRes = await res[1].json()

      setCurrentWeather({ city: searchData.label, ...weatherRes })
      setCurrentForecast({ city: searchData.label, ...ForecastRes })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  console.log(currentWeather)
  console.log(currentForecast)


  return (
    <>
    <div className='container my-20 mx-auto'>
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather && <CurrentWeather data={currentWeather}/>}
      {currentForecast && <Forecast data={currentForecast} />}
    </div>     
    </>
  );
}

export default App;
