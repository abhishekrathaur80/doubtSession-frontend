import axios from "axios";
import {
  DOUBT_ADD_SUCCESS,
  DOUBT_FAILURE,
  DOUBT_GET_SUCCESS,
  DOUBT_REQUEST,
} from "./actionTypes";
import { baseUrl } from "../../url";

export const addDoubt = (doubt, token) => (dispatch) => {
  dispatch({ type: DOUBT_REQUEST });
  axios
    .post(`${baseUrl}/api/doubts/addDoubt`, doubt, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch({ type: DOUBT_ADD_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: DOUBT_FAILURE });
    });
};

export const getAllDoubts = (token) => (dispatch) => {
  dispatch({ type: DOUBT_REQUEST });
  axios
    .get(`${baseUrl}/api/doubts/history`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch({ type: DOUBT_GET_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: DOUBT_FAILURE });
    });
};
