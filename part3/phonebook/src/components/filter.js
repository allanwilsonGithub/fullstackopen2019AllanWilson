import React from 'react'

 const Filter = ({ newFilterString , handleFilterChange }) => (
       <div>
          filter shown with:  <input
          value={newFilterString}
          onChange={handleFilterChange}
          />
       </div>
  )

  export default Filter