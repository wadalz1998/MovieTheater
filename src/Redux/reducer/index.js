import { combineReducers } from "redux";

import listMovieReducer from "../../Container/HomeTemplate/ListMovie/module/reducer";
import listMovieTheaterReducer from "../../Container/HomeTemplate/MovieTheater/module/reducer";
import listMovieTheaterItemReducer from "../../Container/HomeTemplate/MovieTheater/MovieTheaterList/module/reducer";
import listMovieFollowTheaterReducer from "../../Container/HomeTemplate/MovieTheater/MovieFollowTheater/module/reducer";
const rootReducer = combineReducers({
  // key : value,
  listMovieReducer,
  listMovieTheaterReducer,
  listMovieTheaterItemReducer,
  listMovieFollowTheaterReducer,
  
  // detailMovieReducer,
  // authReducer,
});
export default rootReducer;
