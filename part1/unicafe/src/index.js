import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
      setGood(good + 1)
      incrementAll()
  }

  const handleNeutralClick = () => {
      setNeutral(neutral + 1)
      incrementAll()
  }

  const handleBadClick = () => {
      setBad(bad + 1)
      incrementAll()
  }

  const incrementAll = () => {
      setAll(all + 1)
  }


  return (
    <div>
      <h1>Give Feedback</h1>

      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <hr></hr>
      <p>All {all}</p>
      <p>Average {average}</p>
      <p>Positive {positive}</p>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)