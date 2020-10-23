import { connect } from 'react-redux';
import ProjectShow from './ProjectShow';
import { fetchProject, deleteProject, updateProject } from '../../actions/project_actions';
import { createBacking } from '../../actions/backings_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    let bool = false;
    let backingAmt = null; 
    // debugger
    if (Object.values(state.entities.projects).length !== 0) {
        if ((state.entities.projects)[ownProps.match.params.projectId]) {
            debugger
            if (Object.keys((state.entities.projects)[ownProps.match.params.projectId]).includes("backings")) {
                Object.keys((state.entities.projects)[ownProps.match.params.projectId].backings).forEach(backerId => {
                    if (parseInt(backerId) === state.session.id) {
                        bool = true;
                        if (Object.values((state.entities.projects[ownProps.match.params.projectId]).backings)[state.session.id]) {
                            backingAmt = Object.values((state.entities.projects[ownProps.match.params.projectId]).backings)[state.session.id].backing_amount
                        }
                    }
                })
            }
        }
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
        updateProject: (project) => dispatch(updateProject(project))
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectShow))