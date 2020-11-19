import { connect } from 'react-redux';
import ExploreShow from './ExploreShow';
import { fetchProjectsByCategory } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
    const projects = Object.values(state.entities.projects)
    return {
        projects: projects,
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProjects: () => dispatch(fetchProjectsByCategory(ownProps.match.params.exploreId)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExploreShow)