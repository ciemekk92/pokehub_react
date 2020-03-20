import React, { useState } from 'react';
import Button from '../../components/UI/Button/Button';
import SearchInput from '../../components/UI/SearchInput/SearchInput';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import classes from './Search.module.css';

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
    const renderSwitch = param => {
        switch (param) {
            case 'Request failed with status code 404':
                return 'Pokemon not found! Try again!';
            case 'Network Error':
                return 'Check your internet connection!';
            case `Cannot read property 'front_default' of undefined`:
                return 'Search query must not be empty! Type something!';
            default:
                return props.error.message;
        }
    };

    return (
        <>
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
                <p className={classes.Error}>
                    {renderSwitch(props.error.message)}
                </p>
            ) : null}
        </>
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
