import React, { useState, useEffect } from 'react'
import DisplayNames from './components/displayNames'
import Filter from './components/filter'
import PersonForm from './components/personForm'
import personsService from './services/persons'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilterString, setNewFilterString ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState(null)

  useEffect(() => {
    personsService
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])

  const addPerson = (event) => {
      event.preventDefault()
      if (typeof (persons.find(x => x.name === newName)) != "undefined") {
          window.alert(`${newName} already exists in the phonebook`)
      } else {
          setPersons([...persons, { name: newName, number: newNumber }])
          personsService
          .updatePersons({ name: newName, number: newNumber })
          setErrorMessage(
          `${newName} was added to the phonebook`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 3000)
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

  const Notification = ({ message }) => {
    if (message === null) {
    return null
  }

  return (
    <div className="error">
      {message}
    </div>
  )
}

  return (
    <div>
      <h2>Phonebook 123</h2>

      <Notification message={errorMessage} />

      <Filter newFilterString={newFilterString}  handleFilterChange={handleFilterChange} />

      <h3>Add a new...</h3>

      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber}
      handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>

      <DisplayNames persons={persons} setPersons={setPersons} newFilterString={newFilterString}/>

    </div>
  )
}

export default App