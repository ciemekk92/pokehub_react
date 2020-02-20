import React from 'react';
import classes from './AbilityBox.module.css';

const AbilityBox = props => {
   return (
      <div className={classes.AbilityBox}>
         <p className={classes.Type}>{props.type}</p>
         <p className={classes.Value}>{props.value}</p>
         {props.isHidden ? (
            <p className={classes.Hidden}>Hidden Ability</p>
         ) : null}
      </div>
   );
};

export default AbilityBox;
