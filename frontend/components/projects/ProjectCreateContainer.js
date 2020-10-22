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
            category_id: "",
            location: "",
            risks_and_challenges: "",
            campaign: "",
            page: 1,
        },
        authorId: state.session.id,
        path: ownProps.history
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCreate)