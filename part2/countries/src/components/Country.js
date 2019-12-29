import React from 'react'

const Country = ({country}) => {
  const languages = country.languages.map((language, index) => {
    return <li key={index}>{language.name}</li>
  })
  return(
    <div>
      <h2>{country.name}</h2>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h3>Languages</h3>
      <ul>{languages}</ul>
      <div><img src={country.flag} style={{width: 100, border: '1px solid #ccc'}} alt={country.name} /></div>
    </div>
  )
}

export default Country