import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false,
}

export const nextFlagSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        updateFlag: (state,action)=>{
            state.value = action.payload
        }
    },
})

export const {updateFlag} = nextFlagSlice.actions

export default nextFlagSlice.reducer