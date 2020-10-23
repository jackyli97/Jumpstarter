import {
    RECEIVE_ALL_PROJECTS,
    RECEIVE_PROJECT,
    REMOVE_PROJECT,
} from '../actions/project_actions';

const defaultState = {}

const projectReducer = (oldState = defaultState, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ALL_PROJECTS:
            return action.projects.projects
        case RECEIVE_PROJECT:
            newState[action.project.project.id] = action.project.project;
            return newState;
        case REMOVE_PROJECT:
            delete newState[action.projectId]
            return newState;
        default:
            return oldState
    }
}

export default projectReducer;