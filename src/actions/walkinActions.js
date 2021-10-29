import axios from "axios";
import {
    WALKIN_CREATE_FAIL,
  WALKIN_CREATE_REQUEST,
  WALKIN_CREATE_SUCCESS,
  WALKIN_LIST_FAIL,
  WALKIN_LIST_REQUEST,
  WALKIN_LIST_SUCCESS,
} from "../constants/walkinConstants";

export const createWalkinAction =
  (studentname, telecounselorname, universityname, coursename) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: WALKIN_CREATE_REQUEST,
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
        `http://localhost:5000/api/walkin/create`,
        { studentname, telecounselorname, universityname, coursename },
        config
      );
      dispatch({
        type: WALKIN_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

          dispatch({
              type: WALKIN_CREATE_FAIL,
              payload: message
          })
    }
  };

  export const listWalkins = () => async (dispatch, getState) =>{
      try {
           dispatch({
             type: WALKIN_LIST_REQUEST,
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
             `http://localhost:5000/api/walkin/get`,
             config
           );
           dispatch({
             type: WALKIN_LIST_SUCCESS,
             payload: data,
           })
      } catch (error) {
         const message = 
          error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

          dispatch({
            type:WALKIN_LIST_FAIL,
            payload: message,
          })
      }
  }