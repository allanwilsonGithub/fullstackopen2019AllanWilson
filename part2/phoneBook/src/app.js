import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
  ])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const DisplayNames = ({persons}) => persons.map((entry, i) =>
      <p key={i}>{entry.name} {entry.number}</p>
  )

  const addPerson = (event) => {
      event.preventDefault()
      if (typeof (persons.find(x => x.name === newName)) != "undefined") {
          window.alert(`${newName} already exists in the phonebook`)
      } else {
          setPersons([...persons, { name: newName, number: newNumber }])
      }
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