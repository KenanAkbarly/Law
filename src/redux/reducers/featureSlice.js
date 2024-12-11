import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    collapseOpen:''
}

export const featureSlice = createSlice({
    name:'feature',
    initialState,
    reducers:{
        setCollapseOpen:(state, action)=>{
            state.collapseOpen = state.collapseOpen === action.payload? '': action.payload
        }
    }
})

export const { setCollapseOpen } = featureSlice.actions

export default featureSlice.reducer;