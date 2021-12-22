import * as ActionType from "./constant";
import Axios from "axios";
import '../../Loader/Loader2/style.scss'
export const fetchRegisterAPI = (user, history) => {
  return (dispatch) => {
    dispatch(actRegisterRequest());
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      method: "POST",
      data: user,
    })
      .then((result) => {
        // console.log(result);
        dispatch(actRegisterSuccess(result.status));
        // setTimeout(() => {
        //   history.push("/login");
        // }, 2000);
        // return Promise.reject({
        //   response: { data: "Khong co quyen truy cap" },
        // })
      })
      .catch((err) => {
        // console.log(err);
        dispatch(actRegisterFailed(err));
      });
  };
};

const actRegisterRequest = () => {
  return {
    type: ActionType.REGISTER_REQUEST,
  };
};
const actRegisterSuccess = (data) => {
  return {
    type: ActionType.REGISTER_SUCCESS,
    payload: data,
  };
};
const actRegisterFailed = (err) => {
  return {
    type: ActionType.REGISTER_FAILED,
    payload: err,
  };
};
