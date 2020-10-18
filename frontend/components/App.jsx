import React from "react";
import GreetingContainer from "./GreetingContainer";
import ProjectContainer from "./projects/ProjectContainer";
import { Redirect, Route } from 'react-router-dom';
import SignupFormContainer from './SignupFormContainer';
import LoginFormContainer from './LoginFormContainer';
import { AuthRoute } from '../util/route_util'
import { Link } from 'react-router-dom'
import { Switch } from 'react-router-dom'

import Footer from './Footer'

const App = () => {
    return (
        <div>
            <nav className="top-nav">
                <section className="nav-container">
                    <Link to={'/'}>Explore</Link>
                    <Link to={'/'}>Start a Project</Link>
                </section>
                <section className="nav-container-logo">
                    <Link to ="/">
                        <h1>JUMPSTARTER</h1>
                    </Link>
                </section>
                <section className="nav-greeting-container">   
                    <Route path="/" component={GreetingContainer}/>
                    {/* <GreetingContainer /> */}
                    {/* <Route exact path="/" component={GreetingContainer} /> */}
                </section>
            </nav>
            {/* <div className="home-body">
                <section className="featured-container">
                    <Route exact path="/home" component={ProjectContainer} />
                </section>
            </div> */}
            <Switch>
                {/* <Route exact path="/home" component={ProjectContainer} /> */}
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <Route exact path="/" component={ProjectContainer} />
                <Redirect to="/"> </Redirect>
            </Switch>
            <footer>
                <Footer className="footer"/>
            </footer>
        </div>

    )
}

export default App;