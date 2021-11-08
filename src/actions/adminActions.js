import axios from "axios";
import {
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT,
  ADMIN_REGISTER_FAIL,
  ADMIN_REGISTER_REQUEST,
  ADMIN_REGISTER_SUCCESS,
} from "../constants/adminConstants";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_LOGIN_REQUEST });

    const { data } = await axios.post(
      "https://attendace-system-api.herokuapp.com/api/admin/login",
      {
        email,
        password,
      }
    );

    dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("adminInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ADMIN_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const register = (name, email, password, pic) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_REGISTER_REQUEST });

    const { data } = await axios.post(
      "https://attendace-system-api.herokuapp.com/api/admin",
      {
        name,
        pic,
        password,
        email,
      }
    );

    dispatch({ type: ADMIN_REGISTER_SUCCESS, payload: data });
    dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("adminInfo", JSON.stringify(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ADMIN_REGISTER_FAIL,
      payload: message,
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("adminInfo");
  dispatch({ type: ADMIN_LOGOUT });
};
