import { createSlice } from "@reduxjs/toolkit";

const ThemeMode = createSlice({
  name: "themeMode",
  initialState: {
    themeMode: false,
  },
  reducers: {
    editThemeMode: (state, action) => {
      state.themeMode = action.payload;
    },
  },
});

export const { editThemeMode } = ThemeMode.actions;

export default ThemeMode.reducer;
