import * as ActionType from "./constant.js";

let initialTheaterState = {
  loading: false,
  data: null,
  err: null,
  isWaitting: true,
};

const listMovieFollowTheaterReducer = (state = initialTheaterState, action) => {
  switch (action.type) {
    case ActionType.LIST_MOVIEFOLLOWTHEATER_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      state.isWaitting = true;
      return { ...state };
    case ActionType.LIST_MOVIEFOLLOWTHEATER_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      state.isWaitting = false;
      return { ...state };
    case ActionType.LIST_MOVIEFOLLOWTHEATER_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.err;
      state.isWaitting = true;
      return { ...state };

    default:
      return { ...state };
  }
};
export default listMovieFollowTheaterReducer;
