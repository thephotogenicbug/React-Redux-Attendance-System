import axios from "axios";
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

export const createAttendaceAction =
  (
    name,
    mobile,
    department,
    logintime,
    lunchstart,
    lunchend,
    logout,
    currentstatus
  ) =>
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
        `https://attendace-system-api.herokuapp.com/api/attendace/create`,
        {
          name,
          mobile,
          department,
          logintime,
          lunchstart,
          lunchend,
          logout,
          currentstatus,
        },
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
      `https://attendace-system-api.herokuapp.com/api/attendace/get`,
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

export const updateAttendaceAction =
  (id, lunchstart) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ATTENDACES_UPDATE_REQUEST,
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

      const { data } = await axios.put(
        `https://attendace-system-api.herokuapp.com/api/attendace/get/${id}`,
        { lunchstart },
        config
      );
      dispatch({
        type: ATTENDACES_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: ATTENDACES_UPDATE_FAIL,
        payload: message,
      });
    }
  };

export const updateAttendaceActionLunchend =
  (id, lunchend) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ATTENDACES_UPDATE_REQUEST,
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

      const { data } = await axios.put(
        `https://attendace-system-api.herokuapp.com/api/attendace/get/lunchend/${id}`,
        { lunchend },
        config
      );
      dispatch({
        type: ATTENDACES_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: ATTENDACES_UPDATE_FAIL,
        payload: message,
      });
    }
  };

export const updateAttendaceActionLogout =
  (id, logout) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ATTENDACES_UPDATE_REQUEST,
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

      const { data } = await axios.put(
        `https://attendace-system-api.herokuapp.com/api/attendace/get/logout/${id}`,
        { logout },
        config
      );
      dispatch({
        type: ATTENDACES_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: ATTENDACES_UPDATE_FAIL,
        payload: message,
      });
    }
  };

export const listAdminAttendace = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ATTENDACE_ADMIN_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const { data } = await axios.get(
      `https://attendace-system-api.herokuapp.com/api/attendace/admin`
    );

    dispatch({
      type: ATTENDACE_ADMIN_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ATTENDACE_ADMIN_LIST_FAIL,
      payload: message,
    });
  }
};
