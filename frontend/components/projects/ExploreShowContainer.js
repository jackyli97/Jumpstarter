import { connect } from 'react-redux';
import ExploreShow from './ExploreShow';
import { fetchProjectsByCategory } from '../../actions/project_actions';
import { fetchCategories } from '../../actions/categories_actions';

const mapStateToProps = (state, ownProps) => {
    const projects = Object.values(state.entities.projects);
    const categories = Object.values(state.entities.categories)
    let filteredProjectsList = projects;
    let noResults = false;
    let query = null;
    if (ownProps.location.pathname.includes("search")){
        query = ownProps.match.params.query
        filteredProjectsList = projects.filter((project) => (project.title.toLowerCase().includes(ownProps.match.params.query.toLowerCase())));
        if (filteredProjectsList.length === 0) {
            filteredProjectsList = projects.filter((project) => (project.category.category_name.toLowerCase().includes(ownProps.match.params.query.toLowerCase())));
        }
        if (filteredProjectsList.length === 0) {
            filteredProjectsList = projects;
            noResults = true
        }
    }
    if (!query && categories[ownProps.match.params.exploreId]) {
        query = categories[ownProps.match.params.exploreId].category_name
    }
    return {
        projects: filteredProjectsList,
        noResults: noResults,
        query: query,
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    if (ownProps.location.pathname.includes("search")) {
        return {
            fetchProjects: () => dispatch(fetchProjectsByCategory("everything")),
            fetchCategories: () => dispatch(fetchCategories())

        };  
    }
    else{
        return {
            fetchProjects: () => dispatch(fetchProjectsByCategory(ownProps.match.params.exploreId)),
            fetchCategories: () => dispatch(fetchCategories())

        };
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExploreShow)