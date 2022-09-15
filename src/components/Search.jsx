import { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { GEOAPI_URL, geoApiOptions } from '../api/api'

const Search = ({onSearchChange}) => {
  const [search, setSearch] = useState()

  const loadOptions = (inputValue) => {
    return fetch(`${GEOAPI_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
    .then(response => response.json())
    .then((response) => {
      return {
        options: response.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          }
        })
      }
    })
    .catch(err => console.error(err));
  }

  const handleChange = (searchData) => {
    setSearch(searchData)
    onSearchChange(searchData)
    console.log(searchData)
  }
  
  return (
    <>
    <div className='flex flex-col items-center justify-center h-86'>
      <h1 className='text-7xl font-bold text-center my-8'>Sparkle Weather</h1>
      <AsyncPaginate 
        placeholder='Search city'
        debounceTimeout={600}
        value={search}
        onChange={handleChange}
        loadOptions={loadOptions}
        className='w-96'
      />
    </div>
    </>
    
  )
}

export default Search