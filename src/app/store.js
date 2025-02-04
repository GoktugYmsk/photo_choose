import { configureStore } from "@reduxjs/toolkit";
import configure from "../components/Configure/configure";

export const store = configureStore({
  reducer: {
    inputValue: configure,
  },
});
