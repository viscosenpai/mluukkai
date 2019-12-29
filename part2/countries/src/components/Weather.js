import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ country }) => {
  const [weather, setWeather] = useState({})
  const access_key = process.env.REACT_APP_WEATHERSTACK_API_KEY
  const hook = () => {
    axios.get('http://api.weatherstack.com/current', {
      params: {
        access_key: access_key,
        query: country.capital
      }
    }).then(response => {
      console.log(response.data)
      setWeather(response.data)
    })
  }

  useEffect(hook, [])

  const current = weather.current
  const location = weather.location
  // const icon_url = weather.current.weather_icons.shift()
  // const description = weather.current.weather_descriptions.shift()
  return (
    <div>
      {/* <h3>{weather.location.name}</h3> */}
      {/* <div>
        <b>temperature: </b>{weather.current.temperature} Celsius<br />
        <img src={icon_url} style={{width: 100}} alt={description} /><br />
        <b>wind: </b>{weather.current.wind_speed} kilometers/hour
      </div> */}
    </div>
  )
}

export default Weather