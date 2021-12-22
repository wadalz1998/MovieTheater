import * as ActionType from "./constant";
import Axios from "axios";

export const fetchLoginAPI = (user, history) => {
  return (dispatch) => {
    dispatch(actLoginRequest());
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: user,
    })
      .then((result) => {
        // console.log(result.data);
        if (result.data.maLoaiNguoiDung === "QuanTri") {
          localStorage.setItem("UserAdmin", JSON.stringify(result.data))
          dispatch(actLoginSuccess(result.data));
          setTimeout(() => {
            history.push("/dashboard");
          }, 2300);
        }
        else if (result.data.maLoaiNguoiDung === "KhachHang") {
          localStorage.setItem("UserCustomer", JSON.stringify(result.data))
          dispatch(actLoginSuccess(result.data));
          setTimeout(() => {
            history.push("/");
          }, 2300);
        }
        else
          return Promise.reject({
            response: { data: "Khong co quyen truy cap" },
          })
        // return Promise.reject({
        //   response: { data: "Khong co quyen truy cap" },
        // })
      })
      .catch((err) => {
        // console.log(err);
        dispatch(actLoginFailed(err));
      });
  };
};

const actLoginRequest = () => {
  return {
    type: ActionType.AUTH_PAGE_REQUEST,
  };
};
const actLoginSuccess = (data) => {
  return {
    type: ActionType.AUTH_PAGE_SUCCESS,
    payload: data,
  };
};
const actLoginFailed = (err) => {
  return {
    type: ActionType.AUTH_PAGE_FAILED,
    payload: err,
  };
};
