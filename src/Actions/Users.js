import axios from 'axios'

export const getUsers = () => axios.get('https://jsonplaceholder.typicode.com/users')

export const getUserById = id => axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

export const createUser = (body) => axios.post('https://jsonplaceholder.typicode.com/users', body)

export const editUser = (id, body) => axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, body)

export const deleteUser = id => axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
