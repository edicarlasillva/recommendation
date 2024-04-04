/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'

import { AssessmentCreateDTO, AssessmentDeleteDTO, IAssessment } from '../types/assessment'
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

export async function createAssessment(data: AssessmentCreateDTO) {
  try {
    const newAssessment = {
      discipline: data.discipline,
      grade: data.grade 
    }

      const response =  await api.post(`/students/${data.id}/assessments`, newAssessment, {
        headers: {
          Authorization: data.token
        }
      })

      return response.data.data as IAssessment

  } catch(error) {
    console.log("Erro ao criar avaliação: ", error)

    return {}
  }
}

export async function deleteAssessment(data: AssessmentDeleteDTO) {
  try {
      const response =  await api.delete(`/students/${data.studentId}/assessments/${data.assessmentId}`, {
        headers: {
          Authorization: data.token
        }
      })

      return response.data.data as IAssessment

  } catch(error) {
    console.log("Erro ao criar avaliação: ", error)

    return {}
  }
}