import {configureStore} from "@reduxjs/toolkit"
import itemsSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./BagSlice";

let store=configureStore
({
    reducer:
    {
        items:itemsSlice.reducer,
        fetchStatus:fetchStatusSlice.reducer,
        bag:bagSlice.reducer
    }
});

export default store;