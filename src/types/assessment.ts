export interface IAssessment {
  id: string
  discipline: string
  grade: number
}

export interface AssessmentCreateDTO {
  id: string
  discipline: string
  grade: number
  token?: string
}

export interface AssessmentPayload {
  discipline: string
  grade: number
}

export interface AssessmentDeleteDTO {
  studentId: string
  assessmentId: string
  token: string
}