import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import itemsSlice from "../store/itemsSlice.js"
import fetchStatusSlice from "../store/fetchStatusSlice.js";

function FetchItems()
{
    let fetchStatus=useSelector(store=>store.fetchStatus);
    let dispatch=useDispatch();

    useEffect(()=>
    {
        if(fetchStatus.fetchDone)
        {
            return;
        }

        let controller=new AbortController();
        let signal=controller.signal;

        dispatch(fetchStatusSlice.actions.markFetchingStarted());

        fetch('http://localhost:8080/items',{signal})
        .then(res => res.json())
        .then(({items})=>
        {
            dispatch(fetchStatusSlice.actions.markFetchDone());
            dispatch(fetchStatusSlice.actions.markFetchingFinished());
            dispatch(itemsSlice.actions.addInitialItems(items[0]));
        });

        return ()=>
        {
            controller.abort();
        }
    },
    [fetchStatus]);

    return (
        <></>
    )
}

export default FetchItems;