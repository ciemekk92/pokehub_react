import React from 'react';
import classes from './Name.module.css';

const Name = props => {
   return (
      <div className={classes.Name}>
         <p>{props.value}</p>
      </div>
   );
};

export default Name;
