import React from "react";
import ReactDOM from "react-dom";
import * as SessionApiUtil from './util/session_api_util';
import * as ProjectApiUtil from './util/project_util';
import configureStore from "./store/store"
import Root from "./components/root";
import { login, logout, signup } from './actions/session_actions'
import { fetchProjects, fetchProject, createProject, updateProject, deleteProject } from './actions/project_actions'


document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.signup = SessionApiUtil.signup;
    window.login = SessionApiUtil.login;
    window.logout = SessionApiUtil.logout;
    // window.createProject = ProjectApiUtil.createProject;
    // window.fetchProject = ProjectApiUtil.fetchProject;
    // window.fetchProjects = ProjectApiUtil.fetchProjects;
    // window.updateProject = ProjectApiUtil.updateProject;
    // window.deleteProject = ProjectApiUtil.deleteProject;

    window.createProject = createProject;
    window.fetchProject = fetchProject;
    window.fetchProjects = fetchProjects;
    window.updateProject = updateProject;
    window.deleteProject = deleteProject;

    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.date = Date();
});

