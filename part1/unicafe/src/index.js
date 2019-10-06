import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props) => {
  return (
    <p>{props.text} {props.value}</p>
  )
}

const Statistics = (props) => {
  if ((props.good + props.neutral + props.bad) === 0) {
     return (
       <p>No feedback given</p>
     )
  } else {  
    return (
      <div>
        <Statistic text="Good" value ={props.good} />
        <Statistic text="Neutral" value ={props.neutral} />
        <Statistic text="Bad" value ={props.bad} />
        <hr></hr>
        <Statistic text="All" value ={props.good + props.neutral + props.bad} />
        <Statistic text="Average" value ={(props.good - props.bad) / (props.good + props.neutral + props.bad)} />
        <Statistic text="Positive" value ={props.good / (props.good + props.neutral + props.bad)} />
      </div>
  )
}
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
      setGood(good + 1)
  }

  const handleNeutralClick = () => {
      setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
      setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>

      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)