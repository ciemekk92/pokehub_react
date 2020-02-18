import React from 'react';
import classes from './StatBox.module.css';
import dataClasses from '../DataBox/DataBox.module.css';

const StatBox = props => {
   return (
      <div className={`${classes.StatBox} ${classes[props.type]}`}>
         <p className={dataClasses.Type}>{props.type}</p>
         <p className={dataClasses.Value}>{props.value}</p>
      </div>
   );
};

export default StatBox;
