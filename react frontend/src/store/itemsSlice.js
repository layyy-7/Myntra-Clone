import { createSlice } from "@reduxjs/toolkit";

let itemsSlice=createSlice
({
    name:'items',
    initialState:[],
    reducers:
    {
        addInitialItems:function(state,action)
        {
            state=action.payload;
            return state;
        }
    }
});

export default itemsSlice;