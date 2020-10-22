import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Nav from './Nav'

const mapStateToProps = (state, ownProps) => ({
    projectPath: ownProps.location.pathname === "/projects/start"
});


export default withRouter(connect(mapStateToProps, null)(Nav));