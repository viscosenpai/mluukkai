import React from 'react'

const Countries = ({filterCountries}) => {
  return filterCountries.map((country, index) => {
    return <p key={index}>{country.name}</p>
  })
}

export default Countries