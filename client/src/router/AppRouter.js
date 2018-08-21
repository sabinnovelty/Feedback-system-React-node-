import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Login from './../components/authentication/login/Login';
import Registration from './../components/authentication/registration/Registration';
import React from 'react'


const AppRouter=()=>(
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={Login} exact={true} />
                <Route path="/registration" component={Registration} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;