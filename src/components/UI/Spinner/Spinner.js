import React from 'react';
import classes from './Spinner.module.css';
import image from '../../../assets/spinner.png';

const Spinner = () => (
   <div className={classes.Spinner}>
      <img className={classes.Image} src={image} alt="Loading" />
   </div>
);

export default Spinner;
