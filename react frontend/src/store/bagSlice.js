import { createSlice } from "@reduxjs/toolkit";

let bagSlice=createSlice
({
    name:'bag',
    initialState:[],
    reducers:
    {
        addToBag:function(state,action)
        {
            state.push(action.payload);
            return state;
        },
        removeFromBag:function(state,action)
        {
            state=state.filter(itemId=>itemId!==action.payload);
            return state;
        }
    }
});

export default bagSlice;