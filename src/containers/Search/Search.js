import React, { useState } from 'react';
import Button from '../../components/UI/Button/Button';
import SearchInput from '../../components/UI/SearchInput/SearchInput';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const Search = props => {
   const [searchQuery, setSearchQuery] = useState({
      value: '',
      valid: false
   });

   // TBI - input validation
   /* const checkValidity = value => {
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
   }; */

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
         />
         <div>
            <Button clicked={searchHandler} btnType="Search">
               Search!
            </Button>
            <Button clicked={randomHandler} btnType="Search">
               Random!
            </Button>
         </div>
      </React.Fragment>
   );
};

const mapStateToProps = state => {
   return {
      displayResult: state.result.displayResult
   };
};

const mapDispatchToProps = dispatch => {
   return {
      onSearch: query => dispatch(actions.initResult(query)),
      onNext: query => dispatch(actions.nextResult(query))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Search));
