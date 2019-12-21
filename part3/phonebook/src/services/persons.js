import axios from 'axios'
const baseUrl = 'https://blooming-crag-52195.herokuapp.com/api/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const updatePersons = newPerson => {
  const request = axios.post(baseUrl, newPerson)
  return request.then(response => response.data)
}

const deletePerson = ( IDtoDelete , name, updatePersonsFromDb) => {
  if (window.confirm(`Delete ${name}?`)) {
  const request = axios.delete(`${baseUrl}/${IDtoDelete}`)
  return request.then(response => response.data).then(updatePersonsFromDb)
}}

export default { getAll , updatePersons , deletePerson }