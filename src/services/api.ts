/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'

import { IAssessment } from '../types/assessment'
import { ILogin } from '../types/login'

const api = axios.create({
  baseURL: 'http://localhost:3333'
})

interface IAssessmentResponse {
  id: string
  token: string | undefined
}

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

export async function getAssessments(data: IAssessmentResponse) {
  try {
    const response = await api.get(`/students/${data.id}/assessments`, {
      headers: {
        Authorization: data.token
      }
    })

    return response.data.data as IAssessment[]
  } catch (error: any) {
    console.log(error)
    alert(error.toString())

    return []
  }
}