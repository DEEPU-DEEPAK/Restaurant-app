import { SUCCESS, FAIL } from '../constants/resConstant'
import axios from "axios";

export const resList = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/restaurants.json')
        console.log(data);
        dispatch({
            type: SUCCESS,
            payload: data.restaurants
        })
    }
    catch (error) {
        dispatch({
            type: FAIL,
            payload: error
        })
    }
}