import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserMenu from './UserMenu';
import { deleteProject } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
    let usersProjects = [];
    if (state.session.id) {
        if (state.entities.users[state.session.id].projects) {
            usersProjects = Object.values(state.entities.users[state.session.id].projects)
        }
    }
    return {
        usersProjects: usersProjects,
        userId: state.session.id,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteProject: (projectId) => dispatch(deleteProject(projectId)),
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserMenu));