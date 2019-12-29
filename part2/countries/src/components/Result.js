import React from 'react'
import Countries from './Countries'
import Country from './Country'

const Result = props => {

  const filterCountries = props.countries.filter((country, index) => {
    return (country.name).toLowerCase().indexOf(props.filter) >= 0
  })

  const counts = filterCountries.length
  if (counts === 1) {
    const country = filterCountries.shift()
    console.log(country)
    return <Country country={country} />
  } else if (counts <= 10) {
    console.log(filterCountries)
    return <Countries filterCountries={filterCountries} />
  } else {
    return (
      <p>Too many matches, specify another filter</p>
    )
  }
}

export default Result