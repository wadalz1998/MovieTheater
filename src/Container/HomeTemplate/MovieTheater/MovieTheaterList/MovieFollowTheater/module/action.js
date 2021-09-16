import * as actionType from "./constant";
import Axios from "axios";

export const actListMovieFollowTheaterAPI = (theater) => {
  return (dispatch) => {
    dispatch(actMovieFollowTheaterRequest());

    Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${theater}&maNhom=GP08`,
      method: "GET",
    })
      .then((result) => {
        dispatch(actMovieFollowTheaterSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actMovieFollowTheaterFailed(err));
      });
  };
};
const actMovieFollowTheaterRequest = () => {
  return {
    type: actionType.LIST_MOVIEFOLLOWTHEATER_REQUEST,
  };
};
const actMovieFollowTheaterSuccess = (data) => {
  return {
    type: actionType.LIST_MOVIEFOLLOWTHEATER_SUCCESS,
    payload: data,
  };
};
const actMovieFollowTheaterFailed = (err) => {
  return {
    type: actionType.LIST_MOVIEFOLLOWTHEATER_FAILED,
    payload: err,
  };
};
