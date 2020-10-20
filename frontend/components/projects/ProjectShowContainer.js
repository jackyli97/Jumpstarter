import { connect } from 'react-redux';
import ProjectShow from './ProjectShow';
import { fetchProjects } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        project: state.entities.projects[ownProps.match.params.projectId]
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProjects: () => dispatch(fetchProjects()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow)