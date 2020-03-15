import React from 'react';
import classes from './SpinnerSmall.module.css';
import image from '../../../assets/spinnerSmall.png';

const Spinner = () => (
    <div className={classes.SpinnerSmall}>
        <img className={classes.Image} src={image} alt="Loading" />
    </div>
);

export default Spinner;
