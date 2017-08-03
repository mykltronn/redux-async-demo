import request from 'superagent';

export const SET_LAT_LON = 'SET_LAT_LON';
export const CLEAR_MEETUPS = 'CLEAR_MEETUPS';
export const SET_MEETUPS = 'SET_MEETUPS';
export const SET_LOADING = 'SET_LOADING';

const encode = encodeURIComponent;

const setLoading = (payload) => {
    return {type: SET_LOADING, payload: payload};
}

// plain action creators
const setLatLon = (payload) => {
    return {type: SET_LAT_LON, payload: payload}
}

const setMeetups = (payload) => {
    return {type: SET_MEETUPS, payload: payload}
}

// thunk action creators
export const changeLocation = (locString) => {
    return (dispatch, getState) => {
        dispatch(geocodeAddress(locString))
    }
}

const geocodeAddress = (address) => {
    return (dispatch, getState) => {
        dispatch(setLoading(1));
        request.get(`http://maps.googleapis.com/maps/api/geocode/json?address=${encode(address)}`).end((error, response) => {
            if (error) {
                // TODO handle error in some way
            }

            dispatch(setLoading(-1));
            const loc = response.body.results[0].geometry.location;
            dispatch(setLatLon({lat: loc.lat, lon: loc.lng}));
            dispatch(getMeetups(loc.lat, loc.lng));
        })
    }
}

const getMeetups = (lat, lon) => {
    return (dispatch, getState) => {
        dispatch(setLoading(1));
        dispatch({type: CLEAR_MEETUPS});
        request.get(`/api/meetups/${lat}/${lon}`).end((error, response) => {
            if (error) {
                // TODO handle error in some way
            }

            dispatch(setLoading(-1));
            dispatch(setMeetups(response.body));
        });
    }
}
