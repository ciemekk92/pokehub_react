import React from 'react';
import classes from './Result.module.css';
import Image from '../../components/Result/Image/Image';
import DataBox from '../../components/UI/DataBox/DataBox';
import TypesBox from '../../components/UI/TypesBox/TypesBox';
import { connect } from 'react-redux';
import { capitalizeFirstLetter } from '../../shared/utility';

const splitTypes = array => {
   const typesArray = [];
   for (const element of array) {
      typesArray.push(element.type.name);
   }
   return typesArray;
};

const Result = props => {
   let typesIterable = splitTypes(props.types).map(element => (
      <TypesBox type="Type" value={capitalizeFirstLetter(element)} />
   ));

   return (
      <React.Fragment>
         <div className={classes.Box} style={{ display: props.displayBox }}>
            <div className={classes.BoxRow}>
               <Image imageSource={props.sprite} />
               <DataBox type="Name" value={capitalizeFirstLetter(props.name)} />
               <DataBox type="ID" value={props.id} />
            </div>
            <div className={classes.BoxRow}>{typesIterable}</div>
         </div>
      </React.Fragment>
   );
};

const mapStateToProps = state => {
   return {
      id: state.result.id,
      name: state.result.name,
      sprite: state.result.sprite,
      types: state.result.types,
      displayBox: state.result.displayBox
   };
};
export default connect(mapStateToProps)(Result);
