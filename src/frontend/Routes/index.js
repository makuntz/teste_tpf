import { Route, Switch } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import DashboardPage from "../Pages/DashboardPage";

const Routes = () => {

    return(
        <>
        <Switch>
            <Route exact path='/'>
                <LoginPage/>
            </Route>
            <Route path='/dashboard'>
                <DashboardPage/>
            </Route>
        </Switch>
        </>
    )
}

export default Routes