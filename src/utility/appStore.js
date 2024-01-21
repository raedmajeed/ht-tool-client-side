import { configureStore } from "@reduxjs/toolkit";
import hrSliceReducer from "./hrSlice";

const appStore = configureStore({
  reducer: {
    hrSlice: hrSliceReducer
  }
})

export default appStore;