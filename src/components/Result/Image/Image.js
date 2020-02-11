import React from 'react';
import classes from './Image.module.css';
import temp from '../../../assets/799.png';

const Image = props => {
   return (
      <div className={classes.ImageBox}>
         <img src={temp} alt={props.alt} />
      </div>
   );
};

export default Image;
