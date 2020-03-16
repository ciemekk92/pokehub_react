import React from 'react';
import classes from './TypesBox.module.css';

const TypesBox = props => {
    return (
        <div className={`${classes.TypesBox} ${classes[props.value]}`}>
            <p className={classes.Type}>{props.type}</p>
            <p className={classes.Value}>{props.value}</p>
        </div>
    );
};

export default TypesBox;
