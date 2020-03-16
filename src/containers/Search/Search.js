import React, { useState } from 'react';
import Button from '../../components/UI/Button/Button';
import SearchInput from '../../components/UI/SearchInput/SearchInput';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const Error = styled.p`
    text-align: center;
    color: red;
    font-size: 16px;
`;

const Search = props => {
    const [searchQuery, setSearchQuery] = useState({
        value: '',
        valid: false
    });

    const inputChangedHandler = event => {
        setSearchQuery({ value: event.target.value });
    };

    const searchHandler = () => {
        if (!props.displayResult) {
            props.onSearch(searchQuery.value.toLowerCase());
        } else {
            props.onNext(searchQuery.value.toLowerCase());
        }
    };

    const randomGenerator = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const randomHandler = () => {
        if (!props.displayResult) {
            props.onSearch(randomGenerator(1, 807));
        } else {
            props.onNext(randomGenerator(1, 807));
        }
    };

    return (
        <React.Fragment>
            <SearchInput
                changed={inputChangedHandler}
                valid={searchQuery.valid}
                value={searchQuery.value}
                submit={searchHandler}
            />
            <div>
                <Button clicked={searchHandler} btnType="Search">
                    Search!
                </Button>
                <Button clicked={randomHandler} btnType="Search">
                    Random!
                </Button>
            </div>
            {props.error ? (
                <Error>
                    {props.error.message ===
                    'Request failed with status code 404'
                        ? 'Pokemon not found! Try again!'
                        : props.error.message === 'Network Error'
                        ? 'Check your internet connection!'
                        : props.error.message ===
                          `Cannot read property 'front_default' of undefined`
                        ? 'Search query must not be empty! Type something!'
                        : props.error.message}
                </Error>
            ) : null}
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        displayResult: state.result.displayResult,
        error: state.result.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSearch: query => dispatch(actions.initResult(query)),
        onNext: query => dispatch(actions.nextResult(query))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Search));
