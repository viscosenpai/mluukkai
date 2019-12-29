import React from 'react'

const Countries = props => {
  return props.filterCountries.map((country, index) => {
    return <p key={index}>{country.name} <button onClick={() => props.showCountry(index)}>show</button></p>
  })
}

export default Countries