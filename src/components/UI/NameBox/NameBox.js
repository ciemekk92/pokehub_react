import React from 'react';
import classes from './NameBox.module.css';

const NameBox = props => {
   return (
      <div className={classes.NameBox}>
         <p className={classes.Type}>{props.type}</p>
         <p className={classes.Value}>{props.value}</p>
      </div>
   );
};

export default NameBox;
