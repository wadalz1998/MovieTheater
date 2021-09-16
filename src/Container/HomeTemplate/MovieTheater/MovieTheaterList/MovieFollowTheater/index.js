import React from 'react';
import propTypes from "prop-types";


MovieFollowTheater.prototypes={
    keyHeThongRap : propTypes.array,
};
MovieFollowTheater.defaultProps={
    keyHeThongRap:[],
}
function MovieFollowTheater(props) {
    const {keyHeThongRap} = props;
    return (
        <div>
            <p>{keyHeThongRap}</p>
        </div>
    )
}
export default MovieFollowTheater;