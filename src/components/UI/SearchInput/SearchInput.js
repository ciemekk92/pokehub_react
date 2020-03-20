import React from 'react';
import classes from './SearchInput.module.css';

const SearchInput = props => (
    <>
        <p className={classes.Paragraph}>
            Search any Pokemon by name or by its National Pokedex number!
        </p>
        <input
            className={classes.SearchInput}
            label={'Search Input'}
            onChange={props.changed}
            placeholder={'Type in Pokemon name or ID'}
            value={props.value}
            onKeyDown={event => {
                if (event.key === 'Enter') {
                    props.submit();
                }
            }}
        ></input>
    </>
);

export default SearchInput;
