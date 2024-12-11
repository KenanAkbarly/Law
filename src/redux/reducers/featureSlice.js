import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    collapseOpen:'',
    openSidebar:false,
}

export const featureSlice = createSlice({
    name:'feature',
    initialState,
    reducers:{
        setCollapseOpen:(state, action)=>{
            state.collapseOpen = state.collapseOpen === action.payload? '': action.payload
        },
        setOpenSidebar:(state)=>{
            state.openSidebar = !state.openSidebar 
        }
    }
})

export const { setCollapseOpen,setOpenSidebar } = featureSlice.actions

export default featureSlice.reducer;