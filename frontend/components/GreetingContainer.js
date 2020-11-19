import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {fetchProjects} from '../actions/project_actions'
import Greeting from './Greeting'
import { logout } from '../actions/session_actions'

const mapStateToProps = (state, ownProps) => {
    const projects = Object.values(state.entities.projects)
    return{
        projects: projects,
        currentUser: state.entities.users[state.session.id],
        authPath: ownProps.location.pathname === "/login" || ownProps.location.pathname === "/signup",
        path: ownProps.location.pathname === "/" || ownProps.location.pathname.includes("projects")
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchProjects: () => dispatch(fetchProjects()),
    logout: () => dispatch(logout()),
    resetUrl: () => ownProps.history.push('/')
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Greeting));