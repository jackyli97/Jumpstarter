export const createProject = project => {
    return $.ajax({
        url: '/api/projects',
        method: 'POST',
        data: project,
        contentType: false,
        processData: false
    })
}

export const fetchProjects = () => {
    return $.ajax({
        url: '/api/projects',
        method: 'GET',
    })
}

export const fetchProject = (projectId) => {
    return $.ajax({
        url: `/api/projects/${projectId}`,
        method: 'GET'
    })
} 

export const updateProject = (project,id) => {
    return $.ajax({
        url: `/api/projects/${id}`,
        method: 'PATCH',
        data: project,
        contentType: false,
        processData: false
    })
} 
export const updateProjectNoImg = (project,id) => {
    return $.ajax({
        url: `/api/projects/${id}`,
        method: 'PATCH',
        data: {project}
    })
} 

export const deleteProject = (projectId) => {
    return $.ajax({
        url: `/api/projects/${projectId}`,
        method: 'DELETE'
    })
} 

export const fetchProjectsByCategory = (category) => {
    return $.ajax({
        url: `/api/projects/${category}/category`,
        method: 'GET',
    })
}