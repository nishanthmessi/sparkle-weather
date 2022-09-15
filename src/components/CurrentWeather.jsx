const CurrentWeather = ({ data }) => {
  return (
    <>
      <div className="flex justify-center mt-40">
        <div className="relative max-w-4xl w-full my-2 rounded-lg overflow-hidden bg-white shadow-md">          
          <div className="z-10 bg-yellow-100 text-black px-4 py-6 rounded-lg font-light shadow-md flex space-x-36">
            <div className="flex justify-center items-center">
              <img src={`icons/${data.weather[0].icon}.png`} alt="weather"/>
            </div>
            {/* <div className="text-6xl font-bold my-4 ">
              <p>{Math.round(data.main.temp)}ºC</p>
            </div> */}
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col text-lg text-center">
                <p className="text-6xl font-bold mb-2">{Math.round(data.main.temp)}ºC</p>
                <span className="font-semibold text-2xl">{data.weather[0].description}</span>
                <span className="text-6xl font-semibold my-4">{data.city}</span><br/> 
              </div>
            </div>
            <div className="flex flex-col text-xl font-medium items-center justify-center text-center">
              <div>
                <p className="font-semibold my-2">Feels like</p>
                <p>{Math.round(data.main.feels_like)}ºC</p>
              </div>
              <div>
                <p className="font-semibold my-2">Humidity</p>
                <p>{Math.round(data.main.humidity)}%</p>
              </div>
              <div>
                <p className="font-semibold my-2">Pressure</p>
                <p>{Math.round(data.main.pressure)} hPa</p>
              </div>
              <div className="">
                <p className="font-semibold my-2">Wind</p>
                <p>{Math.round(data.wind.speed)} m/s</p>
              </div>
            </div>              
          </div>
        </div>
      </div>
    </>
  )
}

export default CurrentWeather