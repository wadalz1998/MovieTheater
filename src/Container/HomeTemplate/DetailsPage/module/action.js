import * as ActionType from "./constant";
import Axios from "axios";

export const actDetailMovieAPI = (id) => {
  return (dispatch) => {
    dispatch(actDetailMovieRequest());
    Axios({
      url:
        `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
      method: "GET",
    })
      .then((result) => {
        // console.log(result.data);
        dispatch(acDetailMovieSuccess(result.data));
      })
      .catch((err) => {
        // console.log(err);
        dispatch(acDetailMovieFailed(err));
      });
  };
};
const actDetailMovieRequest = () => {
  return {
    type: ActionType.DETAIL_MOVIE_REQUEST,
  };
};
const acDetailMovieSuccess = (data) => {
  return {
    type: ActionType.DETAIL_MOVIE_SUCCESS,
    payload: data,
  };
};
const acDetailMovieFailed = (err) => {
  return {
    type: ActionType.DETAIL_MOVIE_FAILED,
    payload: err,
  };
};
