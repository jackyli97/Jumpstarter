import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import projectReducer from "./project_reducer"
import backingReducer from "./backings_reducer"
import rewardReducer from "./rewards_reducer"

const entitiesReducer = combineReducers({
    users: usersReducer,
    projects: projectReducer,
    backings: backingReducer,
    rewards: rewardReducer
});

export default entitiesReducer;