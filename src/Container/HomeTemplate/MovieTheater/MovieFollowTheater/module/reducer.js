import * as ActionType from "./constant";

let initialMovieFollowtheater = {
    data: [],
    err: null,
    loading: false,
}

const listMovieFollowTheaterReducer = (state = initialMovieFollowtheater, action) => {
    switch (action.type) {
        case ActionType.LIST_MOVIETHEATERFOLLOWTHEATER_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };

        case ActionType.LIST_MOVIETHEATERFOLLOWTHEATER_SUCCESS:
            return {
                ...state,
                loading: (state.loading = false),
                data: { ...state.data, [action.ten]: action.payload },
                // data: state.data.push(action.payload),
                err: (state.err = null),
            };

        case ActionType.LIST_MOVIETHEATERFOLLOWTHEATER_FAILED:
            state.loading = false;
            state.data = null;
            state.err = action.err;
            return { ...state };
        default:
            return { ...state };
    }

};
export default listMovieFollowTheaterReducer;