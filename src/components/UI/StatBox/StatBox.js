import React from 'react';
import classes from './StatBox.module.css';

const StatBox = props => {
    return (
        <div className={`${classes.StatBox} ${classes[props.type]}`}>
            <p className={classes.Type}>{props.type}</p>
            <p className={classes.Value}>{props.value}</p>
        </div>
    );
};

export default StatBox;
