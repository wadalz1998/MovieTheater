import * as ActionType from "./constant";

let initialState = {
  loading: false,
  data: null,
  err: null,
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REGISTER_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case ActionType.REGISTER_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case ActionType.REGISTER_FAILED:
      return {
        ...state,
        loading: (state.loading = false),
        data: (state.data = null),
        err: (state.err = action.err),
      };
    default:
      return { ...state };
  }
};
export default registerReducer;
