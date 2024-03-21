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
      // state.list.push(action.payload)
      return {
        ...state,
        list: [...state.list, action.payload]
      }
    },
    deleteRecommendation: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((item) => item.id !== action.payload)
    }
  }
})

export const { addRecommendation, deleteRecommendation } = recommendationsSlice.actions
export default recommendationsSlice.reducer