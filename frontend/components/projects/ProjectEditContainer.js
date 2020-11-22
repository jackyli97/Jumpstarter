import { connect } from 'react-redux';
import ProjectCreate from './ProjectCreate';
import { fetchProject, updateProject } from '../../actions/project_actions';
import { createReward } from '../../actions/rewards_actions';

const mapStateToProps = (state, ownProps) => {
    let project = state.entities.projects[ownProps.match.params.projectId]
    if (!project){
        return{project: null, type: "edit"}
    }
    else{
        return {
            project: {
                existingPhoto: project.photo_url, projId: ownProps.match.params.projectId,
                category: project.category_id, page: 1, location: project.location, endDate: project.end_date, title: project.title, photoFile: null, photoUrl: "", photoValue: "", description: project.description,
                 fundingGoal: project.funding_goal, risks_and_challenges: project.risks_and_challenges, campaign: project.campaign,
                rewardTitle: "", rewardDes: "", rewardEst: "", rewardShip: "", rewardCost: ""
            },
            authorId: state.session.id,
            path: ownProps.history,
            type: "edit"
        };
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateProject: (project, id, hasImg) => dispatch(updateProject(project, id, hasImg)),
        fetchProject: (projectId) => dispatch(fetchProject(projectId)),
        createReward: (reward) => dispatch(createReward(reward))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCreate)