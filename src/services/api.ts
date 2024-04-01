/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'

import { ILogin } from '../types/login'

const api = axios.create({
  baseURL: 'http://localhost:3333'
})

export async function login(data: ILogin) {
  // const data = {
  //   email: 'carla@gmail.com',
  //   password: '123456'
  // }

  try {
    const response = await api.post('/login', data)

    return response.data.data
  } catch (error: any) {
    console.log(error)
    alert(error.toString())

    return null
  }
}