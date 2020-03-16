import React from 'react';
import classes from './Image.module.css';

const Image = props => {
    return (
        <div className={classes.ImageBox}>
            <p className={classes.Type}>{props.type}</p>
            <img
                className={classes.Image}
                src={props.imageSource}
                alt={props.alt}
            />
        </div>
    );
};

export default Image;
