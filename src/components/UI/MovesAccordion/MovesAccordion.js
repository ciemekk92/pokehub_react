import React, { useState, useRef } from 'react';
import Chevron from '../Chevron/Chevron';
import classes from './MovesAccordion.module.css';

const MovesAccordion = props => {
    const [setActive, setActiveState] = useState('');
    const [setHeight, setHeightState] = useState('0px');
    const [setRotate, setRotateState] = useState(true);

    const content = useRef(null);

    const toggleAccordion = () => {
        setActiveState(setActive === '' ? 'active' : '');
        setHeightState(
            setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
        );
        setRotateState(setActive === 'active' ? true : false);
    };

    return (
        <div style={{ flexDirection: 'column', width: '100%' }}>
            <div className={classes.MovesSection}>
                <button
                    className={`${classes.MoveButton} ${
                        setActive === 'active' ? classes.active : null
                    }`}
                    onClick={toggleAccordion}
                >
                    <p className={classes.MoveName}>{props.name}</p>
                    <Chevron
                        className={`${
                            setRotate
                                ? `${classes.MovesChevron}`
                                : `${classes.MovesChevron} ${classes.rotate}`
                        }`}
                        width={10}
                        fill={'#ccc'}
                    />
                </button>
            </div>
            <div
                ref={content}
                className={classes.MovesContent}
                style={{ maxHeight: `${setHeight}` }}
            >
                <p className={classes.MoveValue}>{props.value}</p>
            </div>
        </div>
    );
};

export default MovesAccordion;
