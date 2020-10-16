import * as ProjectApiUtil from '../util/project_util';

export const RECEIVE_ALL_PROJECTS = "RECEIVE_ALL_PROJECTS"
export const RECEIVE_PROJECT = "RECEIVE_PROJECT"
export const REMOVE_PROJECT = "REMOVE_PROJECT"

export const receiveAllProjects = (projects) => {
    debugger
    return {
        type: RECEIVE_ALL_PROJECTS,
        projects
    }
}

export const receiveProject = (project) => {
    return {
        type: RECEIVE_PROJECT,
        project
    }
}

export const removeProject = (projectId) => {
    return {
        type: REMOVE_PROJECT,
        projectId
    }
}

export const fetchProjects = () => {
    debugger
    return (dispatch) => {
        return ProjectApiUtil.fetchProjects().then((projects) => {
            dispatch(receiveAllProjects(projects))
        })
    }
}

export const fetchProject = (projectId) => {
    return (dispatch) => {
        return ProjectApiUtil.fetchProject(projectId).then((project) => {
            return dispatch(receiveProject(project))
        })
    }
}

export const createProject = (project) => {
    return (dispatch) => {
        return ProjectApiUtil.createProject(project).then((project) => {
            return dispatch(receiveProject(project))
        })
    }
}

export const updateProject = (project) => {
    return (dispatch) => {
        return ProjectApiUtil.updateProject(project).then((project) => {
            return dispatch(receiveProject(project))
        })
    }
}

export const deleteProject = (projectId) => {
    return (dispatch) => {
        return ProjectApiUtil.deleteProject(projectId).then(() => {
            return dispatch(removeProject(projectId))
        })
    }
}