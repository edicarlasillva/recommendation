import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IRecommendation {
  id: number,
  name: string,
  content: string
}

interface IRecommendationsState {
  list: IRecommendation[]
}

const initialState: IRecommendationsState = {
  list: [
    {
      id: 1,
      name: 'Maria da Silva',
      content: 'Profissional muito top.'
    },
    {
      id: 2,
      name: 'José da Silva',
      content: 'Competente.'
    }
  ]
}

const recommendationsSlice = createSlice({
  name: 'recommendations',
  initialState,
  // a action recebe o estado atual e a ação
  reducers: {
    addRecommendation: (state, action: PayloadAction<IRecommendation>) => {
      state.list.push(action.payload)
    }
  }
})

export const { addRecommendation } = recommendationsSlice.actions
export default recommendationsSlice.reducer