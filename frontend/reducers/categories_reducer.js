import {
    RECEIVE_ALL_CATEGORIES
} from '../actions/categories_actions';

const defaultState = {}

const categoriesReducer = (oldState = defaultState, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ALL_CATEGORIES:
            return action.categories.categories
        default:
            return oldState
    }
}

export default categoriesReducer;