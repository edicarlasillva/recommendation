import { createSlice } from "@reduxjs/toolkit"

const todoSlice = createSlice({
  name: 'todo',
  initialState: [
    {
      id: 1,
      title: 'Fazer café'
    },
    {
      id: 2,
      title: 'Comprar pão'
    }
  ],
  reducers: {}
})

export default todoSlice.reducer