import { ATTENDACES_CREATE_FAIL, ATTENDACES_CREATE_REQUEST, ATTENDACES_CREATE_SUCCESS } from "../constants/attendacesConstants";

export const admissionCreateReducer = (state = {}, action) =>{
    switch (action.type) {
        case ATTENDACES_CREATE_REQUEST:
           return {loading: true};
        case ATTENDACES_CREATE_SUCCESS:
           return {loading : false, success: true}
        case ATTENDACES_CREATE_FAIL:
           return {loading: false, error: action.payload}      
        default:
            return state;
    }
}