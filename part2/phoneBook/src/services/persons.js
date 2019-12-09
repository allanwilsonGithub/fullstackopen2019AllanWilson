import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const updatePersons = newPerson => {
  const request = axios.post(baseUrl, newPerson)
  return request.then(response => response.data)
}

const deletePerson = ( IDtoDelete , updatePersonsFromDb) => {
  const request = axios.delete(`${baseUrl}/${IDtoDelete}`)
  return request.then(response => response.data).then(updatePersonsFromDb)
}

export default { getAll , updatePersons , deletePerson }