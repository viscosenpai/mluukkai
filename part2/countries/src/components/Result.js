import React, { useState } from 'react'
import Countries from './Countries'
import Country from './Country'

const Result = props => {
  const [viewCountry, setViewCountry] = useState(false)
  const [viewIndex, setIndex] = useState(0)

  const handleViewCountry = (index) => {
    setViewCountry(!viewCountry)
    setIndex(index)
  }

  const showCountry = (country) => {
    if (viewCountry) {
      return <Country country={country} />
    }
  }

  const filterCountries = props.countries.filter((country, index) => {
    return (country.name).toLowerCase().indexOf(props.filter) >= 0
  })

  const counts = filterCountries.length
  console.log('counts', counts)
  if (counts === 0) {
    return <p>prease input filter</p>
  } else if (counts === 1) {
    const country = filterCountries.shift()
    console.log(country)
    return <Country country={country} />
  } else if (counts >= 10) {
    return (
      <p>Too many matches, specify another filter</p>
    )
  } else {
    console.log(filterCountries)
    return (
      <div>
        <Countries filterCountries={filterCountries} showCountry={handleViewCountry} />
        {showCountry(filterCountries[viewIndex])}
      </div>
    )
  }
}

export default Result