import { SUCCESS, FAIL } from '../constants/resConstant'

export const resListReducers = (state = { restuarant: [] }, action) => {
    console.log(action);
    switch (action.type) {
        case SUCCESS:
            return { restuarant: action.payload }
        case FAIL:
            return { restuarant: action.payload }
        default:
            return state
    }
}