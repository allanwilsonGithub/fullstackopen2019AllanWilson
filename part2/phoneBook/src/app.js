import React, { useState } from 'react'
import DisplayNames from './components/displayNames'
import Filter from './components/filter'
import PersonForm from './components/personForm'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilterString, setNewFilterString ] = useState('')

  const addPerson = (event) => {
      event.preventDefault()
      if (typeof (persons.find(x => x.name === newName)) != "undefined") {
          window.alert(`${newName} already exists in the phonebook`)
      } else {
          setPersons([...persons, { name: newName, number: newNumber }])
      }
  }

  const handleFilterChange = (event) => {
      setNewFilterString(event.target.value)
  }

  const handleNameChange = (event) => {
      setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
      setNewNumber(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>

      <Filter newFilterString={newFilterString}  handleFilterChange={handleFilterChange} />

      <h3>Add a new...</h3>

      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber}
      handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>

      <DisplayNames persons={persons} newFilterString={newFilterString}/>

    </div>
  )
}

export default App