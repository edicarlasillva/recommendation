import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createAssessment, deleteAssessment, getAssessments } from "../../services/api";
import { AssessmentPayload, IAssessment } from "../../types/assessment";
import { RootState } from "../store";
import { setLoading } from "./loadingSlice";

const initialState: IAssessment[] = []

export const listAssessments = createAsyncThunk('assessments/listAssessments', async (_, config) => {
  config.dispatch(setLoading(true))

  const state = config.getState() as RootState
  const user = state.user

  if (!user) {
    return []
  }

  const result = await getAssessments({
    id: user?.id,
    token: user?.token
  })

  config.dispatch(setLoading(false))

  return result
})

export const createAssessmentThunk = createAsyncThunk('assessments/createAssessment', async ({grade, discipline}: AssessmentPayload, config) => {
  config.dispatch(setLoading(true))

  const state = config.getState() as RootState
  const user = state.user

  if (!user) {
    return []
  }

  const result = await createAssessment({
    grade, 
    discipline, 
    id: user.id, 
    token: user.token
  })

  config.dispatch(setLoading(false))

  return result as IAssessment
})

export const deleteAssessmentThunk = createAsyncThunk('assessments/deleteAssessment', async (assessmentId: string, config) => {
  config.dispatch(setLoading(true))

  const state = config.getState() as RootState
  const user = state.user

  if (!user || !user.token) {
    return {}
  }

  const result = await deleteAssessment({assessmentId, studentId: user.id, token: user.token })

  config.dispatch(setLoading(false))

  return result as IAssessment
})

const assessmentsSlice = createSlice({
  name: 'assessments',
  initialState,
  reducers: {
    // addAssessment: (state, action: PayloadAction<IAssessment>) => {
    //   return [...state, action.payload]
    // },
    // deleteAssessment: (state, action: PayloadAction<string>) => {
    //   return state.filter((item) => item.id !== action.payload)
    // }
  },
  extraReducers(builder) {
    builder.addCase(listAssessments.fulfilled, (_, action) => {
      return action.payload
    })

    builder.addCase(deleteAssessmentThunk.fulfilled, (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.id !== action.payload.id)
    })

    builder.addCase(createAssessmentThunk.fulfilled, (state, action: PayloadAction<IAssessment>) => {
      return [...state, action.payload]
    })

    
  }
})

export default assessmentsSlice.reducer