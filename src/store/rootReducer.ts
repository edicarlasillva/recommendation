import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import recommendationsReducer from './slices/recommendationsSlice'
import todoReducer from './slices/todoSlice'
import userReducer from './slices/userSlice'

const rootReducer = combineReducers({
  recommendations: recommendationsReducer,
  todo: todoReducer,
  user: userReducer
})

export const persistedReducer = persistReducer({
  // chave no localStorage
  key: 'alunos',
  storage,
}, rootReducer)

// export default rootReducer