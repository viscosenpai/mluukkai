import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Result from './components/Result'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  const hook = () => {
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      console.log(response.data)
      setCountries(response.data)
    })
  }

  useEffect(hook, [])

  const handleFilterCountries = event => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <p>find countries <input value={filter} onChange={handleFilterCountries} /></p>
      <Result countries={countries} filter={filter} />
    </div>
  )
}

export default App
