import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IAssessment {
  id: string;
  discipline: string;
  grade: number;
  idStudent: string
}

const initialState: IAssessment[] = [
  {
    id: '123456',
    discipline: 'React III',
    grade: 10,
    idStudent: '123456'
  },
  {
    id: '123458',
    discipline: 'Banco de Dados II',
    grade: 8,
    idStudent: '123456'
  }
]

const assessmentsSlice = createSlice({
  name: 'assessments',
  initialState,
  reducers: {
    addAssessment: (state, action: PayloadAction<IAssessment>) => {
      return [...state, action.payload]
    },
    deleteAssessment: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.id !== action.payload)
    }
  }
})

export const { addAssessment } = assessmentsSlice.actions
export default assessmentsSlice.reducer