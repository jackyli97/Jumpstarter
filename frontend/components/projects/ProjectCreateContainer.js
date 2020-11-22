import { connect } from 'react-redux';
import ProjectCreate from './ProjectCreate';
import { createProject } from '../../actions/project_actions';
import { createReward } from '../../actions/rewards_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        project: {
            existingPhoto: null,
            category: "", page: 1, location: "", endDate: "", title: "", photoFile: null, photoUrl: "", photoValue: "", description: "", fundingGoal: "", risks_and_challenges: "", campaign: "",
            rewardTitle: "", rewardDes: "", rewardEst: "", rewardShip: "", rewardCost: ""
        },
        authorId: state.session.id,
        path: ownProps.history,
        type: "create"
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project)),
        createReward: (reward) => dispatch(createReward(reward))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCreate)