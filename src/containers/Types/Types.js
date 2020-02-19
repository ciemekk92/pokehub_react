import React from 'react';
import { connect } from 'react-redux';
import TypesBox from '../../components/UI/TypesBox/TypesBox';
import { capitalizeFirstLetter } from '../../shared/utility';

const Types = props => {
   const splitTypes = array => {
      const typesArray = [];
      for (const element of array) {
         typesArray.push(element.type.name);
      }
      return typesArray;
   };
   let typesIterable = splitTypes(props.types).map(element => (
      <TypesBox
         key={capitalizeFirstLetter(element)}
         type="Type"
         value={capitalizeFirstLetter(element)}
      />
   ));
   return typesIterable;
};

const mapStateToProps = state => {
   return {
      types: state.result.types
   };
};

export default connect(mapStateToProps)(Types);
