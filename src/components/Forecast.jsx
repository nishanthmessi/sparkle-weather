import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion'

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const Forecast = ({data}) => {
  const dayInAWeek = new Date().getDay()
  const forecastDays = DAYS.slice(dayInAWeek, DAYS.length).concat(DAYS.slice(0, dayInAWeek))

  return (
    <>
      <div className='flex flex-col justify-center items-center mt-20 '>
        <label className="text-3xl font-bold mb-6">Daily</label>
        <Accordion allowZeroExpanded>
          {data.list.slice(0, 7).map((item ,index) => (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className='flex items-center justify-center text-xl border-2 rounded-lg shadow-lg space-x-16 my-4 px-8 bg-blue-100'>
                    <img src={`icons/${item.weather[0].icon}.png`} alt="weather" />
                    <label>{forecastDays[index]}</label>
                    <label>{item.weather[0].description}</label>
                    <label>{Math.round(item.main.temp_min)}ºC</label>
                    <label>{Math.round(item.main.temp_max)}ºC</label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className='flex flex-col items-center justify-center text-xl gap-6'>
                <div className=''>
                      <label>Feels like </label>
                      <label>{Math.round(item.main.feels_like)}ºC</label>
                  </div>
                  <div className=''>
                      <label>Pressure </label>
                      <label>{item.main.pressure}</label>
                  </div>
                  <div className=''>
                      <label>Humidity </label>
                      <label>{item.main.humidity}</label>
                  </div>
                  <div className=''>
                      <label>Clouds </label>
                      <label>{item.clouds.all}</label>
                  </div>
                  <div className=''>
                      <label>Wind Speed </label>
                      <label>{item.wind.speed} m/s</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>            
          ))}         
        </Accordion>
      </div>
    </>
  )
}

export default Forecast