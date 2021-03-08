import axios from 'axios';

import { GET_FINANCE_DATA_FAILURE, GET_FINANCE_DATA_REQUEST, GET_FINANCE_DATA_SUCCESS } from "../constants/constants";
 

export const  getStock = (ticker) => async (dispatch) => {
    try {
        dispatch({type: GET_FINANCE_DATA_REQUEST})
        // const ticker = 'aapl'
        const url = `https://sandbox.iexapis.com/stable/stock/${ticker}/quote?token=Tsk_678b4f8a0c3b4032b11c7568fb24dc17`; 
        const { data } = await axios.get( url) 
        dispatch({
            type: GET_FINANCE_DATA_SUCCESS,
            payload: data
        }) 
    } catch (error) {
        dispatch({
            type: GET_FINANCE_DATA_FAILURE,
            payload: error.response.data
        })
    }
}

