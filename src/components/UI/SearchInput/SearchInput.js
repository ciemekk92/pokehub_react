import React from 'react';
import classes from './SearchInput.module.css';

const SearchInput = props => (
   <React.Fragment>
      <p style={{ textAlign: 'center', marginTop: '5%' }}>
         Search any Pokemon by name or by its Pokedex (old) number!
      </p>
      <input
         className={classes.SearchInput}
         onChange={props.changed}
         placeholder={'Type in Pokemon name or id'}
         value={props.value}
      ></input>
   </React.Fragment>
);

export default SearchInput;
