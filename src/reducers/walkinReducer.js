import {
  WALKIN_CREATE_FAIL,
  WALKIN_CREATE_REQUEST,
  WALKIN_CREATE_SUCCESS,
  WALKIN_LIST_FAIL,
  WALKIN_LIST_REQUEST,
  WALKIN_LIST_SUCCESS,
} from "../constants/walkinConstants";

export const walkinCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case WALKIN_CREATE_REQUEST:
      return { loading: true };
    case WALKIN_CREATE_SUCCESS:
      return { loading: false, success: true };
    case WALKIN_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const walkinListReducer = (state = { walkins: [] }, action) => {
  switch (action.type) {
    case WALKIN_LIST_REQUEST:
      return { loading: true };
    case WALKIN_LIST_SUCCESS:
      return { loading: false, walkins: action.payload };
    case WALKIN_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
