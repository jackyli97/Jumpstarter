import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserMenu from './UserMenu';
import { deleteProject } from '../../actions/project_actions';
// import { receiveCurrentUser } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    debugger
    let usersProjects = null;
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
        // receiveCurrentUser: () => dispatch(receiveCurrentUser(ownProps.match.params.userId))
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserMenu));