import axios from "axios";
import {
  ATTENDACES_CREATE_FAIL,
  ATTENDACES_CREATE_REQUEST,
  ATTENDACES_CREATE_SUCCESS,
  ATTENDACES_LIST_FAIL,
  ATTENDACES_LIST_REQUEST,
  ATTENDACES_LIST_SUCCESS,
} from "../constants/attendacesConstants";

export const createAttendaceAction =
  (name, mobile, unique, department, logintime) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: ATTENDACES_CREATE_REQUEST,
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
        `http://localhost:5000/api/attendace/create`,
        { name, mobile, unique, department, logintime },
        config
      );

      dispatch({
        type: ATTENDACES_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      dispatch({
        type: ATTENDACES_CREATE_FAIL,
        payload: message,
      });
    }
  };


  export const listAttendaces = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: ATTENDACES_LIST_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.get(
        `http://localhost:5000/api/attendace`,
        config
      );

      dispatch({
        type: ATTENDACES_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: ATTENDACES_LIST_FAIL,
        payload: message,
      });
    }
  };