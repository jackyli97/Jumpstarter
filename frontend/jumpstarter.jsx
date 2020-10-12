import React from "react";
import ReactDOM from "react-dom";
import * as SessionApiUtil from './util/session_api_util';
// import configureStore from "./store/store"
// import Root from "./components/root";
// import { login, logout, signup } from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
    // let store;
    // if (window.currentUser) {
    //     const preloadedState = {
    //         entities: {
    //             users: { [window.currentUser.id]: window.currentUser }
    //         },
    //         session: { id: window.currentUser.id }
    //     };
    //     store = configureStore(preloadedState);
    //     delete window.currentUser;
    // } else {
    //     store = configureStore();
    // }
    const root = document.getElementById("root");
    // ReactDOM.render(<Root store={store} />, root);
    ReactDOM.render(<h1>Welcome to Jumpstarter</h1>, root);
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    window.signup = SessionApiUtil.signup;
    window.login = SessionApiUtil.login;
    window.logout = SessionApiUtil.logout;
    // window.signup = signup;
    // window.login = login;
    // window.logout = logout;
});

