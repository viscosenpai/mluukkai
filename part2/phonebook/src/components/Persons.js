import React from 'react'

const Persons = props => {

  const showPersons = () => {
    const filterPersons = props.persons.filter((person, index) => {
      return (person.name).toLowerCase().indexOf(props.filter) >= 0
    })
    return filterPersons
  }

  return (
    <div>{showPersons().map(person => <p key={person.name}>{person.name} {person.number}</p>)}</div>
  )
}

export default Persons