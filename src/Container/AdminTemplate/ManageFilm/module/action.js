import * as ActionType from "./constant";
import Axios from "axios";

export const actListFilmAPI = () => {
  return (dispatch) => {
    dispatch(actListFilmRequest());
    Axios({
      url:
        `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP08`,
      method: "GET",

    })
      .then((result) => {
        // console.log(result.data);
        dispatch(actListFilmSuccess(result.data));
      })
      .catch((err) => {
        // console.log(err);
        dispatch(actListFilmFailed(err));
      });
  };
};
// Request
const actListFilmRequest = () => {
  return {
    type: ActionType.LIST_FILM_REQUEST,
  };
};
// List Film
const actListFilmSuccess = (data) => {
  return {
    type: ActionType.LIST_FILM_SUCCESS,
    payload: data,
  };
};
const actListFilmFailed = (err) => {
  return {
    type: ActionType.LIST_FILM_FAILED,
    payload: err,
  };
};
// Delete Film
const actDeleteFilmSuccess = (data) => {
  return {
    type: ActionType.DELETE_FILM_SUCCESS,
    payload: data,
  };
};
const actDeleteFilmFailed = (err) => {
  return {
    type: ActionType.DELETE_FILM_FAILED,
    payload: err,
  };
};
// Update Film
const actDeUpdateFilmSuccess = (data) => {
  return {
    type: ActionType.UPDATE_FILM_SUCCESS,
    payload: data,
  };
};
const actUpdateFilmFailed = (err) => {
  return {
    type: ActionType.UPDATE_FILM_FAILED,
    payload: err,
  };
};