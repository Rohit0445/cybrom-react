import { createSlice } from "@reduxjs/toolkit";

createSlice({
    name :"Cart",
    initialState : {
        cartitems:[]
    },
    reducers:{
        additems:(state,action)=>{
            state.cartitems.push(action.payload)
        }
        
    }
} )