import {
    RECEIVE_ALL_BACKINGS,
    RECEIVE_BACKING,
    REMOVE_BACKING,
} from '../actions/backings_actions';

const defaultState = {}

const backingReducer = (oldState = defaultState, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ALL_BACKINGS:
            return action.backing.backing
        case RECEIVE_BACKING:
            return action.backing.backing
        case REMOVE_BACKING:
            delete newState[action.backingId]
            return newState;
        default:
            return oldState
    }
}

export default backingReducer;