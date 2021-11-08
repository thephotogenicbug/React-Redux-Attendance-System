import axios from "axios";
import {
  LEAVE_CREATE_FAIL,
  LEAVE_CREATE_REQUEST,
  LEAVE_CREATE_SUCCESS,
  LEAVE_LIST_FAIL,
  LEAVE_LIST_REQUEST,
  LEAVE_LIST_SUCCESS,
} from "../constants/leaveConstants";

export const createLeaveAction =
  (name, from, to, leaveoption, reason, currentstatus) =>
  async (dispatch, getState) => {
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
        `https://attendace-system-api.herokuapp.com/api/leave/create`,
        { name, from, to, leaveoption, reason, currentstatus },
        config
      );
      dispatch({
        type: LEAVE_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      dispatch({
        type: LEAVE_CREATE_FAIL,
        payload: message,
      });
    }
  };

export const listLeaves = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: LEAVE_LIST_REQUEST,
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
      `https://attendace-system-api.herokuapp.com/api/leave/get`
    );

    dispatch({
      type: LEAVE_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
    error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
    dispatch({
      type: LEAVE_LIST_FAIL,
      payload: message
    })
  }
};
