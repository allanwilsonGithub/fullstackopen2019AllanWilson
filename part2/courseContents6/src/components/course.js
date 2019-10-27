import React from 'react'

const Header = ({ name }) =>
  <h1>{name}</h1>

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

const Course = ({ course }) => {
    return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
    )
}

export default Course