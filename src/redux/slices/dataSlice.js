import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   value : [],
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        apiData: (state,action)=>{
            state.value = action.payload
        }
    },
})

export const { apiData } = dataSlice.actions

export default dataSlice.reducer

// thunk

export function fetchData(){
    return async function fetchApiData(dispatch, getstate){
        const res = await fetch("https://66699eb32e964a6dfed5e521.mockapi.io/question")
      const data = await res.json()
      dispatch(apiData(data))
    }
}