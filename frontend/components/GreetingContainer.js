import React from 'react';
import { connect } from 'react-redux';
import Greeting from './Greeting'
import { logout } from '../actions/session_actions'

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    authPath: ownProps.location.pathname === "/login" || ownProps.location.pathname === "/signup",
    path: ownProps.location.pathname === "/" 
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    logout: () => dispatch(logout()),
    resetUrl: () => ownProps.history.push('/')
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);