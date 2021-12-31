import * as ActionType from "./constant";
import Axios from "axios";

export const actHandleImgAPI = (formData) => {
  // let accessToken = "";
  // if (localStorage.getItem("UserAdmin")) {
  //   accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
  // }
  console.log(formData);
  return (dispatch) => {
    dispatch(actHandleFilmRequest());
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh",
      data: formData,
      method: "POST",
      // headers: {
      //   Authorization: `Bearer ${accessToken}`
      // },

    })
      .then((result) => {
        console.log(result.data);
        dispatch(actHandleImgSuccess(result.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(actHandleImgSuccess(err));
      });
  };
};
// Request
const actHandleFilmRequest = () => {
  return {
    type: ActionType.HANDLE_FILM_REQUEST,
  };
};
// Post IMG
const actHandleImgSuccess = (data) => {
  return {
    type: ActionType.HANDLE_IMG_SUCCESS,
    payload: data,
  };
};
const actHandleImgFailed = (err) => {
  return {
    type: ActionType.HANDLE_IMG_FAILED,
    payload: err,
  };
};
// Delete Film
// const actDeleteFilmSuccess = (data) => {
//   return {
//     type: ActionType.DELETE_FILM_SUCCESS,
//     payload: data,
//   };
// };
// const actDeleteFilmFailed = (err) => {
//   return {
//     type: ActionType.DELETE_FILM_FAILED,
//     payload: err,
//   };
// };
// // Update Film
// const actDeUpdateFilmSuccess = (data) => {
//   return {
//     type: ActionType.UPDATE_FILM_SUCCESS,
//     payload: data,
//   };
// };
// const actUpdateFilmFailed = (err) => {
//   return {
//     type: ActionType.UPDATE_FILM_FAILED,
//     payload: err,
//   };
// };