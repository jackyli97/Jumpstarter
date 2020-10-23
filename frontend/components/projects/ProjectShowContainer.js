import { connect } from 'react-redux';
import ProjectShow from './ProjectShow';
import { fetchProject, deleteProject } from '../../actions/project_actions';
import { createBacking } from '../../actions/backings_actions';

const mapStateToProps = (state, ownProps) => {
    let bool = false; 
    if (Object.values(state.entities.projects).length !== 0) {
        Object.keys((state.entities.projects[ownProps.match.params.projectId]).backings).forEach(backerId=>{
            if (backerId === state.session.id) {
                bool = true;
            }
        })
    }
    return {
        project: state.entities.projects[ownProps.match.params.projectId],
        currentUser: state.session.id,
        path: ownProps.history,
        currentUserBacked: bool
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProject: () => dispatch(fetchProject(ownProps.match.params.projectId)),
        deleteProject: (projectId) => dispatch(deleteProject(projectId)),
        createBacking: (backing) => dispatch(createBacking(backing)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow)