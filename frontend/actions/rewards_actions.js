import * as RewardsApiUtil from '../util/rewards_api_util';

export const RECEIVE_ALL_REWARDS = "RECEIVE_ALL_REWARDS"
export const RECEIVE_REWARD = "RECEIVE_REWARD"
export const REMOVE_REWARD = "REMOVE_REWARD"

const receiveAllRewards = (rewards) => {
    return {
        type: RECEIVE_ALL_REWARDS,
        rewards
    }
}

const receiveReward = (reward) => {
    return {
        type: RECEIVE_REWARD,
        reward
    }
}

const removeReward = (rewardId) => {
    return {
        type: REMOVE_REWARD,
        rewardId
    }
}

export const fetchRewards = () => {
    return (dispatch) => {
        return RewardsApiUtil.fetchReward().then((rewards) => {
            dispatch(receiveAllRewards(rewards))
        })
    }
}

export const fetchReward = (rewardId) => {
    return (dispatch) => {
        return RewardsApiUtil.fetchReward(rewardId).then((reward) => {
            return dispatch(receiveReward(reward))
        })
    }
}

export const createReward = (reward) => {
    return (dispatch) => {
        return RewardsApiUtil.createReward(reward).then((reward) => {
            return dispatch(receiveReward(reward))
        })
    }
}

export const updateReward = (reward) => {
    return (dispatch) => {
        return RewardsApiUtil.updateReward(reward).then((reward) => {
            return dispatch(receiveReward(reward))
        })
    }
}

export const deleteReward = (rewardId) => {
    return (dispatch) => {
        return RewardsApiUtil.deleteReward(rewardId).then(() => {
            return dispatch(removeReward(rewardId))
        })
    }
}