import {
    RECEIVE_ALL_REWARDS,
    RECEIVE_REWARD,
    REMOVE_REWARD,
} from '../actions/rewards_actions';

const defaultState = {}

const rewardReducer = (oldState = defaultState, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ALL_REWARDS:
            return action.reward.reward
        case RECEIVE_REWARD:
            return action.reward.reward

        case REMOVE_REWARD:
            delete newState[action.rewardId]
            return newState;
        default:
            return oldState
    }
}

export default rewardReducer;