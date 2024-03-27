import { createSlice } from "@reduxjs/toolkit";

interface ITheme {
  currentTheme: string
}

const initialState: ITheme = {
  currentTheme: 'light'
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.currentTheme = state.currentTheme === 'light' ? 'dark' : 'light'
    }
  }
})

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;