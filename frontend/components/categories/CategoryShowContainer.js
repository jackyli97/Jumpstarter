import { connect } from 'react-redux';
import ProjectIndex from '../projects/ProjectIndex';
import { fetchProjectsByCategory } from '../../actions/project_actions';
import { fetchCategories } from '../../actions/categories_actions';

const mapStateToProps = (state, ownProps) => {
    const projects = Object.values(state.entities.projects)

    let rand = Math.random()
    let idx = Math.floor(rand * (projects.length))
    let array = [];
    for (let i = 1; i <= Math.ceil(projects.length / 3); i++) {
        array.push(i)
    }
    return {
        projects: projects,
        project: projects[idx],
        array: array,
        categories: state.entities.categories,
        type: "category"
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProjects: () => dispatch(fetchProjectsByCategory(ownProps.match.params.categoryName)),
        fetchCategories: () => dispatch(fetchCategories())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex)