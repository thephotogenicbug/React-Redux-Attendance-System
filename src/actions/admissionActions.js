import axios from "axios";
import {
  ADMISSION_CREATE_FAIL,
  ADMISSION_CREATE_REQUEST,
  ADMISSION_CREATE_SUCCESS,
  ADMISSION_LIST_FAIL,
  ADMISSION_LIST_REQUEST,
  ADMISSION_LIST_SUCCESS,
} from "../constants/AdmissionConstants";

export const createAdmissionAction =
  (
    studentname,
    admissionnumber,
    telecounselorname,
    unique,
    universityname,
    coursename
  ) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: ADMISSION_CREATE_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `http://localhost:5000/api/admission/create`,
        {
          studentname,
          admissionnumber,
          telecounselorname,
          unique,
          universityname,
          coursename,
        },
        config
      );

      dispatch({
        type: ADMISSION_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      dispatch({
        type: ADMISSION_CREATE_FAIL,
        payload: message,
      });
    }
  };

export const listAdmissions = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADMISSION_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const  {data}  = await axios.get(
      `http://localhost:5000/api/admission/get`,
      config
    );

    dispatch({
      type: ADMISSION_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ADMISSION_LIST_FAIL,
      payload: message,
    });
  }
};
