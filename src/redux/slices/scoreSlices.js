import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    refreshflag1: false,
    refreshFlag: false,
    attemptedQues: 0,
    user: "",
    category: "",
    correct : "",
    wrong: "",
    total: "",
    flagNext: false,
}

export const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        score: (state) => {
            state.value += 1
        },
        attemptedQues: (state) => {
            state.attemptedQues += 1
        },
        user: (state, action) => {
            state.user = action.payload
        },
        refreshFlag1: (state, action) => {
            state.refreshflag1 = action.payload
        },
        refreshFlag: (state, action) => {
            state.refreshFlag = action.payload
        },
        categoryData: (state, action) => {
            state.category = action.payload
        },
        flagNext: (state, action) => {
            state.flagNext = action.payload
        },
    },
})

export const { score, flag, nextFlag, attemptedQues, user, refreshFlag, refreshFlag1, categoryData, flagNext } = scoreSlice.actions

export default scoreSlice.reducer