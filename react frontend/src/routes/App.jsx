import Header from "../components/Header"
import Footer from "../components/Footer"
import Loading from "../components/Loading"
import {Outlet} from "react-router-dom"
import FetchItems from "../components/FetchItems"
import { useSelector } from "react-redux";

function App() 
{
    let fetchStatus=useSelector(store=>store.fetchStatus);

    return (
        <>
            <Header></Header>
            <FetchItems></FetchItems>
            {fetchStatus.fetching?<Loading></Loading>:<Outlet></Outlet>}
            <Footer></Footer>
        </>
    )
}

export default App