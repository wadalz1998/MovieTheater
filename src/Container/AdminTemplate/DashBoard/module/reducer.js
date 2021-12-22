import * as ActionType from "./constant";

let initialState = {
  loading: false,
  data: null,
  dataDeleteUser: null,
  dataUpdateUser: null,
  err: null,
  errDelete: null,
  errUpdate: null,
};

const listInfoUserReducer = (state = initialState, action) => {
  switch (action.type) {
    // ---Request
    case ActionType.LIST_USER_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    // LIST_USER
    case ActionType.LIST_USER_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };

    case ActionType.LIST_USER_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.err;
      return { ...state };

    // DELETE_USER
    case ActionType.DELETE_USER_SUCCESS:
      state.loading = false;
      state.dataDeleteUser = action.payload;
      state.errDelete = null;
      return { ...state };

    case ActionType.DELETE_USER_FAILED:
      state.loading = false;
      state.dataDeleteUser = null;
      state.errDelete = action.err;
      return { ...state };

    // UPDATE_USER
    case ActionType.UPDATE_USER_SUCCESS:
      state.loading = false;
      state.dataUpdateUser = action.payload;
      state.errUpdate = null;
      return { ...state };
    case ActionType.UPDATE_USER_FAILED:
      state.loading = false;
      state.dataUpdateUser = null;
      state.errUpdate = action.err;
      return { ...state };

    // DEFAULT
    default:
      return { ...state };
  }
};
export default listInfoUserReducer;
