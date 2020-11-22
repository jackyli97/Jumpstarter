import React from 'react';
import { connect } from 'react-redux'
import { Route, Redirect, withRouter } from "react-router-dom";

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            !loggedIn ? <Component {...props} /> : <Redirect to="/" />
        }
    />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to="/login" />
            )
    )} />
);

const PrivateProjects = ({ component: Component, path, userMatches, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        userMatches ? (
            <Component {...props} />
        ) : (
                <Redirect to="/" />
            )
    )} />
);


const mapStateToProps = (state, ownProps) => {
    return { loggedIn: Boolean(state.session.id),
        userMatches: Boolean(state.session.id === parseInt(ownProps.location.pathname[ownProps.location.pathname.length - 1]) ||
        state.session.id === parseInt(ownProps.location.pathname[1]))
    };
};

export const AuthRoute = withRouter(
    connect(
        mapStateToProps,
        null
    )(Auth)
);

export const ProtectedRoute = withRouter(
    connect(
        mapStateToProps,
        null
        )(Protected));

export const PrivateProjectsRoute = withRouter(
    connect(
        mapStateToProps,
        null
        )(PrivateProjects));
