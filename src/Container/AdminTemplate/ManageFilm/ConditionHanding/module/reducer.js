import * as ActionType from "./constant";

let initialState = {
  loading: false,
  data: null,
  // dataDeleteFilm: null,
  // dataUpdateFilm: null,
  err: null,
  // errDelete: null,
  // errUpdate: null,
};

const handleManageFilm = (state = initialState, action) => {
  switch (action.type) {
    // ---Request
    case ActionType.HANDLE_FILM_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    // HANDLE IMG
    case ActionType.HANDLE_IMG_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };

    case ActionType.HANDLE_IMG_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.err;
      return { ...state };

    // // DELETE_USER
    // case ActionType.DELETE_FILM_SUCCESS:
    //   state.loading = false;
    //   state.dataDeleteFilm = action.payload;
    //   state.errDelete = null;
    //   return { ...state };

    // case ActionType.DELETE_FILM_FAILED:
    //   state.loading = false;
    //   state.dataDeleteFilm = null;
    //   state.errDelete = action.err;
    //   return { ...state };

    // // UPDATE_USER
    // case ActionType.UPDATE_FILM_SUCCESS:
    //   state.loading = false;
    //   state.dataUpdateFilm = action.payload;
    //   state.errUpdate = null;
    //   return { ...state };
    // case ActionType.UPDATE_FILM_FAILED:
    //   state.loading = false;
    //   state.dataUpdateFilm = null;
    //   state.errUpdate = action.err;
    //   return { ...state };

    // DEFAULT
    default:
      return { ...state };
  }
};
export default handleManageFilm;
