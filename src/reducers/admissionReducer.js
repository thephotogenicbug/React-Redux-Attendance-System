import {
  ADMISSION_CREATE_FAIL,
  ADMISSION_CREATE_REQUEST,
  ADMISSION_CREATE_SUCCESS,
  ADMISSION_LIST_FAIL,
  ADMISSION_LIST_REQUEST,
  ADMISSION_LIST_SUCCESS,
} from "../constants/AdmissionConstants";

export const admissionCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMISSION_CREATE_REQUEST:
      return { loading: true };
    case ADMISSION_CREATE_SUCCESS:
      return { loading: false, success: true };
    case ADMISSION_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const admissionListReducer = (state = { admissions: [] }, action) => {
  switch (action.type) {
    case ADMISSION_LIST_REQUEST:
      return { loading: true };
    case ADMISSION_LIST_SUCCESS:
      return { loading: false, admissions: action.payload };
    case ADMISSION_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
