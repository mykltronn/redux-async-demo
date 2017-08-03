import update from 'immutability-helper';
import {SET_LAT_LON, CLEAR_MEETUPS, SET_MEETUPS, SET_LOADING} from "./actions";

const initialState = {
    loc: {
        lat: null,
        lon: null
    },
    meetups: [],
    loading: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return update(state, {
                loading: {
                    $apply: count => count + action.payload
                }
            })
        case SET_LAT_LON:
            return update(state, {
                loc: {
                    $set: action.payload
                }
            });
        case CLEAR_MEETUPS:
            return update(state, {
                meetups: {
                    $set: []
                }
            });
        case SET_MEETUPS:
            return update(state, {
                meetups: {
                    $set: action.payload
                }
            })
        default:
            return state;
    }
}

export default reducer;
