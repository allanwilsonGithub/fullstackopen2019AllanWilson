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

//Get array of excercises
const Total = ({ parts }) => parts.map((part, i) => {
    console.log(parts[i].exercises)  
    return parts[i].exercises
    }
)

const TotalReduced = ({ parts }) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return ([parts[0].exercises,parts[1].exercises,parts[2].exercises,parts[1].exercises].reduce(reducer));
  }


/*
#reduce the array by adding each element

#show the html
<p>Number of exercises {total}</p>

*/

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