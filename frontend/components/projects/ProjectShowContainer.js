import { connect } from 'react-redux';
import ProjectShow from './ProjectShow';
import { fetchProject, deleteProject } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        project: state.entities.projects[ownProps.match.params.projectId],
        currentUser: state.session.id,
        path: ownProps.history
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProject: () => dispatch(fetchProject(ownProps.match.params.projectId)),
        deleteProject: (projectId) => dispatch(deleteProject(projectId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow)