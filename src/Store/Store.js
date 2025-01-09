import { configureStore } from "@reduxjs/toolkit";
import ThemeMode from "./ThemeMode/ThemeMode";
import Error from "./Error/Error";

const Store = configureStore({
  reducer: {
    error: Error,
    themeMode: ThemeMode,
  },
});

export default Store;
