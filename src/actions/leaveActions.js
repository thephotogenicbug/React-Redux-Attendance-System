import axios from "axios";
import {
  LEAVE_CREATE_FAIL,
  LEAVE_CREATE_REQUEST,
  LEAVE_CREATE_SUCCESS,
} from "../constants/leaveConstants";

export const createLeaveAction =
  (name, unique, from, to) => async (dispatch, getState) => {
    try {
      dispatch({
        type: LEAVE_CREATE_REQUEST,
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
        `http://localhost:5000/api/leave/create`,
        { name, unique, from, to },
        config
      );
      dispatch({
        type: LEAVE_CREATE_SUCCESS,
        payload: data,
      })
    } catch (error) {
      const message = 
       error.response && error.response.data.message
       ? error.response.data.message
       : error.message

       dispatch({
         type: LEAVE_CREATE_FAIL,
         payload: message,
       })
    }
  };
