import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserMenu from './UserMenu'

const mapStateToProps = (state, ownProps) => {
    let usersProjects = null;
    if (state.session.id) {
        if (state.entities.users[state.session.id].projects) {
            usersProjects = Object.values(state.entities.users[state.session.id].projects)
        }
    }
    return {
        usersProjects: usersProjects,
    }
};

export default withRouter(connect(mapStateToProps, null)(UserMenu));