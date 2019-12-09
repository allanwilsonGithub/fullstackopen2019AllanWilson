import React from 'react'
import personsService from '../services/persons'

  const DisplayNames = ({ persons, newFilterString }) => persons.map((entry, i) => {
      if (entry.name.toLowerCase().includes(newFilterString.toLowerCase())) {
          return (
          <p key={i}>{entry.name} {entry.number} <button onClick={() => personsService.deletePerson(entry.id)}>Delete</button></p>
          )} else {
          return ("")
          }
        }
   )

export default DisplayNames