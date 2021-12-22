import * as ActionType from "./constant";
import Axios from "axios";

export const actListUserAPI = (currentPage, limitItemOfPage) => {
  return (dispatch) => {
    dispatch(actListUserRequest());
    Axios({
      url:
        `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP08&soTrang=${currentPage}&soPhanTuTrenTrang=${limitItemOfPage}`,
      method: "GET",

    })
      .then((result) => {
        // console.log(result.data);
        dispatch(actListUserSuccess(result.data));
      })
      .catch((err) => {
        // console.log(err);
        dispatch(actListUserFailed(err));
      });
  };
};
export const actDeleteUserAPI = (taiKhoan) => {
  let accessToken = "";
  if (localStorage.getItem("UserAdmin")) {
    accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
  }
  return (dispatch) => {
    dispatch(actListUserRequest());
    Axios({
      url:
        `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then((result) => {
        // console.log(result)
        dispatch(actDeleteSuccess(result.data));
      })
      .catch((err) => {
        // console.log(err )
        dispatch(actDeleteFailed(err));
      })
  }
}
export const actUpdateUserAPI = (account) => {
  let accessToken = "";
  if (localStorage.getItem("UserAdmin")) {
    accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
  }
  return (dispatch) => {
    dispatch(actListUserRequest());
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      method: "PUT",
      data: account,
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then((result) => {
        // console.log(result.data);
        dispatch(actDeUpdateUserSuccess(result.data));
      })
      .catch((err) => {
        // console.log(err)
        dispatch(actUpdateUserFailed(err));
      })
  }
}
// List User
const actListUserRequest = () => {
  return {
    type: ActionType.LIST_USER_REQUEST,
  };
};
const actListUserSuccess = (data) => {
  return {
    type: ActionType.LIST_USER_SUCCESS,
    payload: data,
  };
};
const actListUserFailed = (err) => {
  return {
    type: ActionType.LIST_USER_FAILED,
    payload: err,
  };
};
// Delete User
const actDeleteSuccess = (data) => {
  return {
    type: ActionType.DELETE_USER_SUCCESS,
    payload: data,
  };
};
const actDeleteFailed = (err) => {
  return {
    type: ActionType.DELETE_USER_FAILED,
    payload: err,
  };
};
// Update User
const actDeUpdateUserSuccess = (data) => {
  return {
    type: ActionType.UPDATE_USER_SUCCESS,
    payload: data,
  };
};
const actUpdateUserFailed = (err) => {
  return {
    type: ActionType.UPDATE_USER_FAILED,
    payload: err,
  };
};