import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const updatePersons = newPerson => {
  const request = axios.post(baseUrl, newPerson)
  return request.then(response => response.data)
}

const deletePerson = ( IDtoDelete , name, persons, setPersons) => {
  if (window.confirm(`Delete ${name}?`)) {
  const request = axios.delete(`${baseUrl}/${IDtoDelete}`)
  setPersons(persons.filter(person => person.id !== IDtoDelete))
  return request.then(response => response.data)
}}

export default { getAll , updatePersons , deletePerson }