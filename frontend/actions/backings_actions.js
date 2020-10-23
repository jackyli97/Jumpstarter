import * as BackingsApiUtil from '../util/backings_api_util';

export const RECEIVE_ALL_BACKINGS = "RECEIVE_ALL_BACKINGS"
export const RECEIVE_BACKING = "RECEIVE_BACKING"
export const REMOVE_BACKING = "REMOVE_BACKING"

const receiveAllBackings = (backings) => {
    return {
        type: RECEIVE_ALL_BACKINGS,
        backings
    }
}

const receiveBacking = (backing) => {
    return {
        type: RECEIVE_BACKING,
        backing
    }
}

const removeBacking = (backingId) => {
    return {
        type: REMOVE_BACKING,
        backingId
    }
}

export const fetchBackings = () => {
    return (dispatch) => {
        return BackingsApiUtil.fetchBackings().then((backings) => {
            dispatch(receiveAllBackings(backings))
        })
    }
}

export const fetchBacking = (backingId) => {
    return (dispatch) => {
        return BackingsApiUtil.fetchBacking(backingId).then((backing) => {
            return dispatch(receiveBacking(backing))
        })
    }
}

export const createBacking = (backing) => {
    return (dispatch) => {
        return BackingsApiUtil.createBacking(backing).then((backing) => {
            return dispatch(receiveBacking(backing))
        })
    }
}

export const updateBacking = (backing) => {
    return (dispatch) => {
        return BackingsApiUtil.updateBacking(backing).then((backing) => {
            return dispatch(receiveBacking(backing))
        })
    }
}

export const deleteBacking = (backingId) => {
    return (dispatch) => {
        return BackingsApiUtil.deleteBacking(backingId).then(() => {
            return dispatch(removeBacking(backingId))
        })
    }
}