import { GET_FINANCE_DATA_FAILURE, GET_FINANCE_DATA_REQUEST, GET_FINANCE_DATA_SUCCESS } from "../constants/constants";
 
 
// takes in state & action. 
// initial state is product array,
export const stockReducer = (state = { stock: [] }, action) => {
    switch (action.type) {
        case GET_FINANCE_DATA_REQUEST:
            return {
                loading: true,
                stock: []
            } 
        case GET_FINANCE_DATA_SUCCESS:
            // console.log(action.payload);
            return {
                loading: false,
                stock: action.payload
            } 
        case GET_FINANCE_DATA_FAILURE:
            // console.log(action.payload);
            return {
                loading: false,
                error: action.payload
            }
 
        default:
            return state;
    }

}

