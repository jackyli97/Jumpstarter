import { connect } from 'react-redux';
import ProjectShow from './ProjectShow';
import { fetchProject } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        project: state.entities.projects[ownProps.match.params.projectId]
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProject: () => dispatch(fetchProject(ownProps.match.params.projectId))
       
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow)