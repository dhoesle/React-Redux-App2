import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAdvice } from '../actions'

const Quote = ({ getAdvice, advice, isFetching, error}) => {
    console.log("Quote -> advice", advice)
    useEffect(() => {
        getAdvice();
    }, [getAdvice]);

    if (isFetching) {
        return <h2>Loading...</h2>
    }

    return (
        <>
            <h2>Advice: test</h2>
            <button onClick={getAdvice}>More Wisdom</button>
            <h3>"{advice}"</h3>
        </>
    )
};

const mapStateToProps = state => {
    return {
        advice: state.advice,
        isFetching: state.isFetching,
        error: state.error
    }
}


export default connect(
    mapStateToProps,
    { getAdvice }
)(Quote)