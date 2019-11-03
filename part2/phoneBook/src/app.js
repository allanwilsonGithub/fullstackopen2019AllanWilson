import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    'Arto Hellas'
  ])

  const [ numbers, setNumbers] = useState([
    '01382 730 426'
  ])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const DisplayNames = ({persons}) => persons.map((person, i) =>
      <p key={person}>{person} {numbers[i]}</p>
  )

  const addPerson = (event) => {
      event.preventDefault()
      if (persons.indexOf(newName) > 0) {
          window.alert(`${newName} already exists in the phonebook`)
      } else {
          setPersons(persons.concat(newName))
          setNumbers(numbers.concat(newNumber))
          setNewName('')
          setNewNumber('')
      }
  }

  const addNumber = (event) => {
      event.preventDefault()
      setNumbers(numbers.concat(newNumber))
      setNewNumber('')
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
      <form onSubmit={addPerson}>
        <div>
          name: <input
          value={newName}
          onChange={handleNameChange}
          />
        </div>
        <div>
          number: <input
          value={newNumber}
          onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <DisplayNames persons={persons} />
    </div>
  )
}

export default App