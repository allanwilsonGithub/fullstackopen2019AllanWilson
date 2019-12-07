import React from 'react'

  const DisplayNames = ({ persons, newFilterString }) => persons.map((entry, i) => {
      if (entry.name.toLowerCase().includes(newFilterString.toLowerCase())) {
          return (
          <p key={i}>{entry.name} {entry.number}</p>
          )} else {
          return ("")
          }
        }
   )

export default DisplayNames