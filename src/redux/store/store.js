import { configureStore } from '@reduxjs/toolkit'
import scoreReducer from "../slices/scoreSlices"
import quesSliceReducer from "../slices/questionsSlice"
import dataSlice from "../slices/dataSlice"
import nextFlagReducer from "../slices/nextFlagSlice"
export const store = configureStore({
  reducer: {
    nextFlag: nextFlagReducer,
    data: dataSlice,
    score: scoreReducer,
    ques: quesSliceReducer,
  },
})