import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <button onClick={props.action}>{props.text}</button>
  )
}

const Statistic = (props) => {
  return (
    <tr><td>{props.text}</td><td>{props.value}</td></tr>
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
        <table>
        <tbody>
        <Statistic text="Good" value ={props.good} />
        <Statistic text="Neutral" value ={props.neutral} />
        <Statistic text="Bad" value ={props.bad} />
        </tbody>
        </table>
        <hr></hr>
        <table>
        <tbody>
        <Statistic text="All" value ={props.good + props.neutral + props.bad} />
        <Statistic text="Average" value ={(props.good - props.bad) / (props.good + props.neutral + props.bad)} />
        <Statistic text="Positive" value ={props.good / (props.good + props.neutral + props.bad)} />
        </tbody>
        </table>
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
      <Button text="Good" action={handleGoodClick} />
      <Button text="Neutral" action={handleNeutralClick} />
      <Button text="Bad" action={handleBadClick} />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)