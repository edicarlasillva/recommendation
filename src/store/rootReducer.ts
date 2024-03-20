import { combineReducers } from '@reduxjs/toolkit'

import todoReducer from './slices/todoSlice'

const rootReducer = combineReducers({
  // recommendations: recommendationsReducer,
  todo: todoReducer
})

export default rootReducer