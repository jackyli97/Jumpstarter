import React from "react";
import ProjectContainer from "./projects/ProjectContainer";
import ProjectShowContainer from "./projects/ProjectShowContainer";
import ProjectCreateContainer from "./projects/ProjectCreateContainer";
import { Redirect, Route } from 'react-router-dom';
import SignupFormContainer from './SignupFormContainer';
import LoginFormContainer from './LoginFormContainer';
import { AuthRoute, PrivateProjectsRoute, ProtectedRoute } from '../util/route_util'
import { Switch } from 'react-router-dom'
import Footer from './Footer'
import NavContainer from "./projects/NavContainer";
import CategoryShow from "./categories/CategoryShowContainer"
import ExploreShow from "./projects/ExploreShowContainer"
import Explore from "./projects/Explore"
import UserMenu from "./projects/UserMenuContainer"
import ProjectEditContainer from "./projects/ProjectEditContainer"

const App = () => {
    return (
        <div>
            <NavContainer />
            <Switch>
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <ProtectedRoute exact path="/profile/projects/" component={UserMenu} />
                <ProtectedRoute exact path="/projects/start" component={ProjectCreateContainer} />
                <PrivateProjectsRoute exact path="/:userId/projects/edit/:projectId" component={ProjectEditContainer} />
                <Route exact path="/projects/discover" component={Explore} />
                <Route exact path="/projects/explore/:exploreId" component={ExploreShow} />
                <Route exact path="/projects/category/:categoryName" component={CategoryShow} />
                <Route exact path="/projects/search/:query" component={ExploreShow} />
                <Route exact path="/projects/:projectId" component={ProjectShowContainer} />
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