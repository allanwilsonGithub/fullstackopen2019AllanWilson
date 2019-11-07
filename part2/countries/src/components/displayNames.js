import React from 'react'

  const DisplayNames = ({ countries, newFilterString }) => countries.map((entry, i) => {
      if (entry.name.toLowerCase().includes(newFilterString.toLowerCase()))
          return (
          <p key={i}>{entry.name}</p>
          )
        }
   )

export default DisplayNames