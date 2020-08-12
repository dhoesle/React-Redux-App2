import {
    FETCHING_QUOTE_START,
    FETCHING_QUOTE_SUCCESS
} from '../actions'

const initialState = {
    loading: false,
    advice: null,
    isFetching: false,
    error: ''
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_QUOTE_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCHING_QUOTE_SUCCESS:
            return {
                ...state,
                advice: action.payload,
                isFetching: false,
            }
        default:
            return state;
    }
}