import { connect } from 'react-redux';
import ProjectCreate from './ProjectCreate';
import { createProject } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        project: {
            title: "",
            description: "",
            updates: "",
            faq: "",
            amount_pledged: "",
            funding_goal: "",
            end_date: "",
            cateogory_id: "",
            location: "",
            risks_and_challenges: "",
            campaign: "",
            page: 1,
        }
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCreate)