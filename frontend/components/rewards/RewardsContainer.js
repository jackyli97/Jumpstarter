import { connect } from 'react-redux';
import ProjectShow from '../projects/ProjectShow';
import { fetchRewards } from '../../actions/rewards_actions';

const mapStateToProps = (state, ownProps) => {
    const rewards = Object.values(state.entities.rewards)
    return {
        rewards: rewards,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRewards: () => dispatch(fetchRewards()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow)