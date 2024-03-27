import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import assessmentsReducer from './slices/assessmentsSlice'
import modalReducer from './slices/modalSlice'
import recommendationsReducer from './slices/recommendationsSlice'
import themeReducer from './slices/themeSlice'
import todoReducer from './slices/todoSlice'
import userReducer from './slices/userSlice'

const rootReducer = combineReducers({
  recommendations: recommendationsReducer,
  todo: todoReducer,
  user: userReducer,
  assessments: assessmentsReducer,
  modal: modalReducer,
  theme: themeReducer
})

export const persistedReducer = persistReducer({
  // chave no localStorage
  key: 'alunos',
  storage,
}, rootReducer)

// export default rootReducer