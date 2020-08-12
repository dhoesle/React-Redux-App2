import axios from 'axios'
export const FETCHING_QUOTE_START = 'FETCHING_QUOTE_START'
export const FETCHING_QUOTE_SUCCESS = 'FETCHING_QUOTE_SUCCESS'
export const FETCHING_QUOTE_FAILURE= 'FETCHING_QUOTE_FAILURE'

export const getAdvice = () => dispatch => {
    dispatch({ type: FETCHING_QUOTE_START});
    axios
        .get('https://api.adviceslip.com/advice')
        .then(res => {
            console.log(res.data.slip.advice)
            dispatch({ type: FETCHING_QUOTE_SUCCESS, payload: res.data.slip.advice })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: FETCHING_QUOTE_FAILURE,
                payload: err.response.message
            })
        })

}