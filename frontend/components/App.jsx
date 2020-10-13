import React from "react";
import GreetingContainer from "./GreetingContainer";
import { Route } from 'react-router-dom';
import SignupFormContainer from './SignupFormContainer';
import LoginFormContainer from './LoginFormContainer';
import { AuthRoute } from '../util/route_util'

const App = () => {
    return (
        <div>
            <header>
                <h1>Jumpstarter</h1>
            </header>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/" component={GreetingContainer} />
        </div>

    )
}

export default App;