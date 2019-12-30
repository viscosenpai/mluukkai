import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personsService.getAll().then(initialPersons => {
      console.log(initialPersons)
      setPersons(initialPersons)
    })
  }, [])

  const addName = event => {
    event.preventDefault()
    const existName = persons.map(person => person.name)
    if (!existName.indexOf(newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      }
      personsService.create(newPerson).then(initialPersons => {
        setPersons(persons.concat(initialPersons))
        setNewName('')
        setNewNumber('')
      })
    }
  }

  const deleteName = id => {
    const person = persons.find(p => p.id === id)
    if (window.confirm(`Delete ${person.name} ?`)) {
      personsService.deleteObject(id).then(res => {
        setPersons(persons.filter(p => p.id !== id))
      })
    }
  }

  const handleNameChange = event => {
    setNewName(event.target.value)
  }

  const handleNumberChange = event => {
    setNewNumber(event.target.value)
  }

  const handlefilterName = event => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} filterName={handlefilterName} />
      <h2>add a new</h2>
      <PersonForm name={newName} number={newNumber} addName={addName} nameChange={handleNameChange} numberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} deleteName={deleteName} />
      {/* <div>debug: {newName}</div> */}
    </div>
  )
}

export default App