import { connect } from 'react-redux';
import ProjectShow from './ProjectShow';
import { fetchProject, deleteProject, updateProject } from '../../actions/project_actions';
import { createBacking } from '../../actions/backings_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    let bool = false;
    let backingAmt = null; 
    if (state.session.id && state.entities.users[state.session.id].backings) {
        Object.values(state.entities.users[state.session.id].backings).forEach(backing=>{
            if (backing.project.id === parseInt(ownProps.match.params.projectId)){
                bool = true
                backingAmt = backing.backing_amount
            }
        })
    }
    return {
        project: state.entities.projects[ownProps.match.params.projectId],
        currentUser: state.session.id,
        path: ownProps.history,
        currentUserBacked: bool,
        backingAmt: backingAmt
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProject: () => dispatch(fetchProject(ownProps.match.params.projectId)),
        deleteProject: (projectId) => dispatch(deleteProject(projectId)),
        createBacking: (backing) => dispatch(createBacking(backing)),
        updateProject: (project) => dispatch(updateProject(project)),
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectShow))