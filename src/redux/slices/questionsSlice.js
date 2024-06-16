import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Questions: {
        creator: "",
        category: "",
        questions: [],
        categoryQuestions: null,
    }
}

export const quesSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        creator: (state,action)=>{
            state.Questions.creator = action.payload
        },
        category: (state,action)=>{
            state.Questions.category = action.payload
        },
        questions: (state,action)=>{
            state.Questions.questions.push(action.payload) 
        },
        categoryQuestions: (state,action)=>{
            state.Questions.categoryQuestions = action.payload
        },
    },
})

export const { creator, category, questions, categoryQuestions } = quesSlice.actions

export default quesSlice.reducer