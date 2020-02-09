import React, { useState } from 'react';
import axios from 'axios';
import Button from '../../components/UI/Button/Button';
import SearchInput from '../../components/UI/SearchInput/SearchInput';

const Search = props => {
   const [searchQuery, setSearchQuery] = useState({
      value: '',
      valid: false
   });

   // TBI - input validation
   const checkValidity = value => {
      let isValid = true;
      if (
         (typeof value === 'number' && value.length <= 3 && value.length > 0) ||
         (typeof value === 'string' && value.length > 0)
      ) {
         isValid = true;
      } else {
         isValid = false;
      }
      return isValid;
   };

   const inputChangedHandler = event => {
      setSearchQuery({ value: event.target.value });
   };

   const inputHandler = event => {
      event.preventDefault();
      // ... Code for dispatching search
   };

   const searchHandler = () => {
      axios
         .get(`https://pokeapi.co/api/v2/pokemon/${searchQuery.value}`)
         .then(response => {
            console.log(response.data);
         });
   };

   const randomGenerator = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
   };

   const randomHandler = () => {
      axios
         .get(`https://pokeapi.co/api/v2/pokemon/${randomGenerator(1, 807)}`)
         .then(response => {
            console.log(response.data);
         });
   };

   return (
      <React.Fragment>
         <SearchInput
            changed={inputChangedHandler}
            valid={searchQuery.valid}
            value={searchQuery.value}
         />
         <div>
            <Button clicked={searchHandler} btnType="Search">
               Search!
            </Button>
            <Button clicked={randomHandler} btnType="Random">
               Random!
            </Button>
         </div>
      </React.Fragment>
   );
};

export default Search;
