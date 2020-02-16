import React from 'react';
import classes from './DataBox.module.css';

const DataBox = props => {
   return (
      <div className={classes.DataBox}>
         <p className={classes.Type}>{props.type}</p>
         <p className={classes.Value}>{props.value}</p>
      </div>
   );
};

export default DataBox;
