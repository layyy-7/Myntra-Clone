import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {Provider} from 'react-redux'
import Bag from "./routes/Bag.jsx"
import Home from './routes/Home.jsx'
import store from './store/index.js'

let router=createBrowserRouter([
    {
        path:"/",
        element:<App></App>,
        children:
        [
            {path:"/",element:<Home></Home>},
            {path:"/bag",element:<Bag></Bag>}
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}></RouterProvider>
        </Provider>
    </React.StrictMode>,
)