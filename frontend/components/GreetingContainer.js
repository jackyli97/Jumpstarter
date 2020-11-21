import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {fetchProjects} from '../actions/project_actions'
import Greeting from './Greeting'
import { logout } from '../actions/session_actions'

const mapStateToProps = (state, ownProps) => {
    const projects = Object.values(state.entities.projects);
    let usersProjects = null;
    let backedProjects = null;
    let username= null;
    if (state.session.id) {
        username = state.entities.users[state.session.id].name
        if (state.entities.users[state.session.id].projects){
            usersProjects = Object.values(state.entities.users[state.session.id].projects)
        }
        if (state.entities.users[state.session.id].backings){
            backedProjects = Object.values(state.entities.users[state.session.id].backings)
        }
    }
    return{
        // projects: projects,
        currentUser: state.entities.users[state.session.id],
        username: username,
        usersProjects: usersProjects,
        backedProjects: backedProjects,
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