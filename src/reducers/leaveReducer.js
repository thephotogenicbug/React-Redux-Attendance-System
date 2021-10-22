import {
  LEAVE_CREATE_FAIL,
  LEAVE_CREATE_REQUEST,
  LEAVE_CREATE_SUCCESS,
  LEAVE_LIST_FAIL,
  LEAVE_LIST_REQUEST,
  LEAVE_LIST_SUCCESS,
} from "../constants/leaveConstants";

export const leaveCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case LEAVE_CREATE_REQUEST:
      return { loading: true };
    case LEAVE_CREATE_SUCCESS:
      return { loading: false, success: true };
    case LEAVE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const leaveListReducer = (state ={leaves: []}, action) =>{
   switch (action.type) {
     case LEAVE_LIST_REQUEST:
       return {loading: true};
     case LEAVE_LIST_SUCCESS:
       return {loading: false, leaves: action.payload};
     case LEAVE_LIST_FAIL:
       return {loading : false, error: action.payload}    
     default:
       return state;
   }
}
