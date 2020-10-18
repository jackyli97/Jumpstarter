import { connect } from 'react-redux';
import ProjectIndex from './ProjectIndex';
import { fetchProjects } from '../../actions/project_actions';

const mapStateToProps = (state) => {
    debugger
    const projects = Object.values(state.entities.projects)
    let rand = Math.random()
    let idx = Math.floor(rand * (projects.length)) 
    return {
        projects: projects,
        project: projects[idx]
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProjects: () => dispatch(fetchProjects()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex)
