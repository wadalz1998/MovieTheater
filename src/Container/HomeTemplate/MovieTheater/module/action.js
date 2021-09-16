import * as actionType from "./constant";
import Axios from "axios";

export const actListMovietheaterAPI = () => {
  return (dispatch) => {
    dispatch(actMovieTheaterRequest());

    Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
      method: "GET",
    })
      .then((result) => {
        dispatch(actMovieTheaterSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actMovieTheaterFailed(err));
      });
  };
};
const actMovieTheaterRequest = () => {
  return {
    type: actionType.LIST_MOVIETHEATER_REQUEST,
  };
};
const actMovieTheaterSuccess = (data) => {
  return {
    type: actionType.LIST_MOVIETHEATER_SUCCESS,
    payload: data,
  };
};
const actMovieTheaterFailed = (err) => {
  return {
    type: actionType.LIST_MOVIETHEATER_FAILED,
    payload: err,
  };
};
