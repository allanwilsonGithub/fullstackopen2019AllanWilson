import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ name }) =>
  <h1>{name}</h1>

const Courses = ({ courses }) => courses.map((course, i) =>
  <ul key={course.id}>
    <Course course={course}/>
  </ul>
) 

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

const Total = ({ parts }) => (
  <p><b>Total of { 
  parts
  .map(p => p.exercises)
  .reduce((a, c) => a + c)
  } excercises</b></p>
  )

  const App = () => {
    const courses = [
      {
        name: 'Half Stack application development',
        id: 1,
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
            name: 'Redux',
            exercises: 11,
            id: 4
          }
        ]
      }, 
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }
    ]
  
    return (
      <div>
        <Courses courses={courses} />
      </div>
    )
  }

ReactDOM.render(
  <App />,
  document.getElementById('root')
)