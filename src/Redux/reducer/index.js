import { combineReducers } from "redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import listMovieReducer from "../../Container/HomeTemplate/ListMovie/module/reducer";
import listMovieTheaterReducer from "../../Container/HomeTemplate/MovieTheater/module/reducer";
import listMovieTheaterItemReducer from "../../Container/HomeTemplate/MovieTheater/MovieTheaterList/module/reducer";
import listMovieFollowTheaterReducer from "../../Container/HomeTemplate/MovieTheater/MovieFollowTheater/module/reducer";
import authReducer from "../../SmallComponent/LogIn/module/reducer";
import detailsPageReducer from "../../Container/HomeTemplate/DetailsPage/module/reducer";
import listInfoUserReducer from "../../Container/AdminTemplate/DashBoard/module/reducer"
import listInfoFilmReducer from "../../Container/AdminTemplate/ManageFilm/module/reducer";
import registerReducer from "../../SmallComponent/Register/module/reducer"
import handleManageFilm from "../../Container/AdminTemplate/ManageFilm/ConditionHanding/module/reducer"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({
  // key : value,
  listMovieReducer,
  listMovieTheaterReducer,
  listMovieTheaterItemReducer,
  listMovieFollowTheaterReducer,
  authReducer,
  detailsPageReducer,
  listInfoUserReducer,
  registerReducer,
  listInfoFilmReducer,
  handleManageFilm,
  // detailMovieReducer,
  // authReducer,
});

const persistingReducer  = persistReducer(persistConfig, rootReducer)
export const store = createStore(
  persistingReducer ,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
export default persistingReducer ;
