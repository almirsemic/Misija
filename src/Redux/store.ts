import { configureStore } from '@reduxjs/toolkit'
import paramsReducer from "./paramsSlice"

const store = configureStore({
  reducer: {
    params: paramsReducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store