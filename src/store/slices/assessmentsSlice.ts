import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAssessments } from "../../services/api";
import { IAssessment } from "../../types/assessment";
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
  },
  extraReducers(builder) {
    builder.addCase(listAssessments.fulfilled, (_, action) => {
      return action.payload
    })
  }
})

export const { addAssessment, deleteAssessment } = assessmentsSlice.actions
export default assessmentsSlice.reducer