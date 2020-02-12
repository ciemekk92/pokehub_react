import React from 'react';
import classes from './Image.module.css';

const Image = props => {
   return (
      <div className={classes.ImageBox}>
         <img src={props.imageSource} alt={props.alt} />
      </div>
   );
};

export default Image;
