import React from 'react';
import classes from './Result.module.css';
import Image from '../../components/Result/Image/Image';
import DataBox from '../../components/UI/DataBox/DataBox';
import TypesBox from '../../components/UI/TypesBox/TypesBox';
import StatBox from '../../components/UI/StatBox/StatBox';
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
      <TypesBox
         key={capitalizeFirstLetter(element)}
         type="Type"
         value={capitalizeFirstLetter(element)}
      />
   ));
   let baseStats = props.stats
      .map(element => (
         <StatBox
            key={element.stat.name}
            type={capitalizeFirstLetter(element.stat.name)}
            value={element.base_stat}
         />
      ))
      .reverse();

   return (
      <React.Fragment>
         <div className={classes.Box} style={{ display: props.displayBox }}>
            <div className={classes.BoxRow}>
               <Image type={'Front'} imageSource={props.spriteFront} />
               {props.spriteBack ? (
                  <Image type={'Back'} imageSource={props.spriteBack} />
               ) : null}
               <div className={classes.BoxColumn}>
                  <div className={classes.BoxRow}>
                     <DataBox
                        type="Name"
                        value={capitalizeFirstLetter(props.name)}
                     />
                     <DataBox type="ID" value={'#' + props.id} />
                  </div>
                  <div className={classes.BoxRowTypes}>{typesIterable}</div>
               </div>
            </div>
            <div className={classes.BoxRow}>
               <DataBox type="Height" value={props.height / 10 + ' m'} />
               <DataBox type="Weight" value={props.weight / 10 + ' kg'} />
               <DataBox type="Base Experience" value={props.baseExperience} />
            </div>
            <div className={classes.BoxRow}>{baseStats}</div>
         </div>
      </React.Fragment>
   );
};

const mapStateToProps = state => {
   return {
      id: state.result.id,
      name: state.result.name,
      spriteFront: state.result.spriteFront,
      spriteBack: state.result.spriteBack,
      types: state.result.types,
      height: state.result.height,
      weight: state.result.weight,
      stats: state.result.stats,
      baseExperience: state.result.baseExperience,
      displayBox: state.result.displayBox
   };
};
export default connect(mapStateToProps)(Result);
