import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ name }) =>
  <h1>{name}</h1>

const Course = ({ course }) => {
    return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
    )
}

const Content = ({ parts }) => parts.map((part, i) =>
  <ul key={part.id}>
    {part.name} {part.exercises}
  </ul>
)

const Total = ({ parts }) => parts.map((part, i) => {
    return (
      <p>Number of exercises {part.exercises}</p>
    )
  }

)

const total = parts.reduce( (s, p) => {
  console.log('what is happening', s, p)
  return someMagicHere
})


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'If it all blows up',
        exercises: 24,
        id: 4
      }

    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)