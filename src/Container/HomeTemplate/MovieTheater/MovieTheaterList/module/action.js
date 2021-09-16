import * as actionType from "./constant";
import Axios from "axios";

export const actMovieTheaterItemAPI = (theater) => {
  return (dispatch) => {
    dispatch(actMovieTheaterItemRequest());

    Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${theater}`,
      method: "GET",
    })
      .then((result) => {
        dispatch(actMovieTheaterItemSuccess(theater, result.data));
      })
      .catch((err) => {
        dispatch(actMovieTheaterItemFailed(err));
      });
  };
};
const actMovieTheaterItemRequest = () => {
  return {
    type: actionType.LIST_MOVIETHEATERITEM_REQUEST,
  };
};
const actMovieTheaterItemSuccess = (theater, data) => {
  return {
    type: actionType.LIST_MOVIETHEATERITEM_SUCCESS,
    payload: data,
    ten: theater,
  };
};
const actMovieTheaterItemFailed = (err) => {
  return {
    type: actionType.LIST_MOVIETHEATERITEM_FAILED,
    payload: err,
  };
};
