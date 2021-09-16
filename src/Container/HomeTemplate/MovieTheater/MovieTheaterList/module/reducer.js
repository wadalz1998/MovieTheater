import * as ActionType from "./constant.js";

let initialTheaterState = {
  loading: false,
  data: null,
  err: null,
};

const listMovieTheaterItemReducer = (state = initialTheaterState, action) => {
  switch (action.type) {
    case ActionType.LIST_MOVIETHEATERITEM_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case ActionType.LIST_MOVIETHEATERITEM_SUCCESS:
      return {
        ...state,
        loading: (state.loading = false),
        data: { ...state.data, [action.ten]: action.payload },
        // data: state.data.push(action.payload),
        err: (state.err = null),
      };
    // state.loading = false;
    // state.data = action.payload;
    // state.err = null;
    // return { ...state };

    // return { ...state };
    case ActionType.LIST_MOVIETHEATERITEM_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.err;
      return { ...state };

    default:
      return { ...state };
  }
};
export default listMovieTheaterItemReducer;
