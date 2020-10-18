import { connect } from 'react-redux';
import ProjectIndex from './ProjectIndex';
import { fetchProjects } from '../../actions/project_actions';

const mapStateToProps = (state) => {
    const projects = Object.values(state.entities.projects)
    let rand = Math.random()
    let idx = Math.floor(rand * (projects.length)) 
    let array = [];
    for (let i=1; i<= Math.ceil(projects.length / 3) ; i++) {
        array.push(i)
    }
    return {
        projects: projects,
        project: projects[idx],
        array: array
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProjects: () => dispatch(fetchProjects()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex)
