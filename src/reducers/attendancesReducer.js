import {
  ATTENDACES_CREATE_FAIL,
  ATTENDACES_CREATE_REQUEST,
  ATTENDACES_CREATE_SUCCESS,
  ATTENDACES_LIST_FAIL,
  ATTENDACES_LIST_REQUEST,
  ATTENDACES_LIST_SUCCESS,
  ATTENDACES_UPDATE_FAIL,
  ATTENDACES_UPDATE_REQUEST,
  ATTENDACES_UPDATE_SUCCESS,
  ATTENDACE_ADMIN_LIST_FAIL,
  ATTENDACE_ADMIN_LIST_REQUEST,
  ATTENDACE_ADMIN_LIST_SUCCESS,
} from "../constants/attendacesConstants";

export const attendaceCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ATTENDACES_CREATE_REQUEST:
      return { loading: true };
    case ATTENDACES_CREATE_SUCCESS:
      return { loading: false, success: true };
    case ATTENDACES_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const attendaceListReducer = (state = { attendaces: [] }, action) => {
  switch (action.type) {
    case ATTENDACES_LIST_REQUEST:
      return { loading: true };
    case ATTENDACES_LIST_SUCCESS:
      return { loading: false, attendaces: action.payload };
    case ATTENDACES_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const attendaceUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case ATTENDACES_UPDATE_REQUEST:
      return { loading: true };
    case ATTENDACES_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case ATTENDACES_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const attendaceAdminListReducer = (
  state = { attendace: [] },
  action
) => {
  switch (action.type) {
    case ATTENDACE_ADMIN_LIST_REQUEST:
      return { loading: true };
    case ATTENDACE_ADMIN_LIST_SUCCESS:
      return { loading: false, attendace: action.payload };
    case ATTENDACE_ADMIN_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
