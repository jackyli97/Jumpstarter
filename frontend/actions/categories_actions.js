import * as CategoriesApiUtil from '../util/categories_api_util';

export const RECEIVE_ALL_CATEGORIES = "RECEIVE_ALL_CATEGORIES"

const receiveAllCategories = (categories) => {
    return {
        type: RECEIVE_ALL_CATEGORIES,
        categories
    }
}


export const fetchCategories = () => {
    return (dispatch) => {
        return CategoriesApiUtil.fetchCategories().then((categories) => {
            dispatch(receiveAllCategories(categories))
        })
    }
}