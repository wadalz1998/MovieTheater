import * as ActionType from "./constant";
import Axios from "axios";

export const actListMovieAPI = () => {
  return (dispatch) => {
    dispatch(actListMovieRequest());
    Axios({
      url:
        // "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP08",
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP08",
      method: "GET",
    })
      .then((result) => {
        // console.log(result.data);
        dispatch(actListMovieSuccess(result.data));
      })
      .catch((err) => {
        // console.log(err);
        dispatch(actListMovieFailed(err));
      });
  };
};

const actListMovieRequest = () => {
  return {
    type: ActionType.LIST_MOVIE_REQUEST,
  };
};
const actListMovieSuccess = (data) => {
  return {
    type: ActionType.LIST_MOVIE_SUCCESS,
    payload: data,
  };
};
const actListMovieFailed = (err) => {
  return {
    type: ActionType.LIST_MOVIE_FAILED,
    payload: err,
  };
};
