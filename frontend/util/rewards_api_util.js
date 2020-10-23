export const createReward = reward => {
    return $.ajax({
        url: '/api/rewards',
        method: 'POST',
        data: reward,
        contentType: false,
        processData: false
    })
}

export const fetchRewards = () => {
    return $.ajax({
        url: '/api/rewards',
        method: 'GET',
    })
}

export const fetchReward = (rewardId) => {
    return $.ajax({
        url: `/api/rewards/${rewardId}`,
        method: 'GET'
    })
}

export const updateReward = (reward) => {
    return $.ajax({
        url: `/api/rewards/${reward.id}`,
        method: `PATCH`,
        data: { reward }
    })
}

export const deleteReward = (rewardId) => {
    return $.ajax({
        url: `/api/rewards/${rewardId}`,
        method: 'DELETE'
    })
} 