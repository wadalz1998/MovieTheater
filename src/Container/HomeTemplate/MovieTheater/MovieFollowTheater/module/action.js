import * as ActionType from "./constant";
import Axios from "axios";

export const actListMovieFollowTheaterAPI = (theater) => {
    return (dispatch) => {
        dispatch(actListMovieFollowTheaterRequest());

        Axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${theater}&maNhom=GP08`,
            method: "GET"
        })
            .then((result) => {
                dispatch(actListMovieFollowTheaterSucessed(theater, result.data))
            })
            .catch((err) => {
                dispatch(actListMovieFollowTheaterFailed(err));
            })
    }

}

const actListMovieFollowTheaterRequest = () => {
    return {
        type: ActionType.LIST_MOVIETHEATERFOLLOWTHEATER_REQUEST,
    }
}
const actListMovieFollowTheaterSucessed = (theater, data) => {
    return {
        type: ActionType.LIST_MOVIETHEATERFOLLOWTHEATER_SUCCESS,
        payload: data,
        ten: theater,
    }
}
const actListMovieFollowTheaterFailed = (err) => {
    return {
        type: ActionType.LIST_MOVIETHEATERFOLLOWTHEATER_FAILED,
        payload: err,
    };
}