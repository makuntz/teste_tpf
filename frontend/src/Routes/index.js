import { Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import DashboardPage from "../Pages/DashboardPage";

const RoutesComponent = () => {

    return(
        <>
        <Routes>
            <Route exact path='/' element={<LoginPage/>}/>
            <Route path='/dashboard' element={<DashboardPage/>}/>
        </Routes>
        </>
    )
}

export default RoutesComponent