export const createBacking = backing => {
    return $.ajax({
        url: '/api/backings',
        method: 'POST',
        data: { backing }
    })
}

export const fetchBackings = () => {
    return $.ajax({
        url: '/api/backings',
        method: 'GET',
    })
}

export const fetchBacking = (backingId) => {
    return $.ajax({
        url: `/api/backings/${backingId}`,
        method: 'GET'
    })
}

export const updateBacking = (backing) => {
    return $.ajax({
        url: `/api/backings/${backing.id}`,
        method: `PATCH`,
        data: { backing }
    })
}

export const deleteBacking = (backingId) => {
    return $.ajax({
        url: `/api/backings/${backingId}`,
        method: 'DELETE'
    })
} 