import React from 'react';
import { connect } from 'react-redux';
import Greeting from './Greeting'
import { logout } from '../actions/session_actions'

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    path: ownProps.location.pathname === "/login" || ownProps.location.pathname === "/signup"
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);