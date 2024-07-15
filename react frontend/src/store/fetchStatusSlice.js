import { createSlice } from "@reduxjs/toolkit";

let fetchStatusSlice=createSlice
({
    name:'fetchStatus',
    initialState:
    {
        fetchDone:false,
        fetching:false
    },
    reducers:
    {
        markFetchDone:function(state)
        {
            state.fetchDone=true;
            return state;
        },
        markFetchingStarted:function(state)
        {
            state.fetching=true;
            return state;
        },
        markFetchingFinished:function(state)
        {
            state.fetching=false;
            return state;
        }
    }
});

export default fetchStatusSlice;