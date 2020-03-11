import React, { useState, useRef } from 'react';
import Chevron from '../Chevron/Chevron';
import classes from './MovesAccordion.module.css';
import {
    removeDuplicateObjects,
    removeDashes,
    removeUnderscores,
    capitalizeAllFirstLetters,
    capitalizeFirstLetter
} from '../../../shared/utility';

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
        setRotateState(setActive === 'active');
    };

    const groupByMethods = () => {
        let sortedByMethods = {
            level_Up: [],
            tutor: [],
            machine: [],
            egg: [],
            other: []
        };
        props.data.forEach(element => {
            let methodName = '';
            switch (element.method) {
                case 'level-up':
                    methodName = 'level_Up';
                    break;
                case 'tutor':
                    methodName = 'tutor';
                    break;
                case 'machine':
                    methodName = 'machine';
                    break;
                case 'egg':
                    methodName = 'egg';
                    break;
                default:
                    methodName = 'other';
                    break;
            }
            sortedByMethods[methodName].push(element);
        });
        return sortedByMethods;
    };
    const renderData = object => {
        const methodEntries = Object.entries(object);
        let methods = methodEntries.map(element =>
            // skipping unnecessary methods
            element[0] !== 'other' ? (
                // checking if certain method isn't empty
                element[1].length !== 0 ? (
                    <div className={classes.MethodContainer} key={element[0]}>
                        {capitalizeFirstLetter(removeUnderscores(element[0]))}
                        {removeDuplicateObjects(element[1])
                            // sorting by name
                            .sort((a, b) => (a.moveName < b.moveName ? 1 : -1))
                            // sorting by level
                            .sort((a, b) => (a.level > b.level ? 1 : -1))
                            .map(move => (
                                <div
                                    className={classes.MoveContainer}
                                    key={
                                        move.moveName +
                                        Math.floor(Math.random() * 100)
                                    }
                                >
                                    <p className={classes.MoveName}>
                                        {capitalizeAllFirstLetters(
                                            removeDashes(move.moveName)
                                        )}
                                    </p>
                                    <p className={classes.MoveLevel}>
                                        {element[0] === 'level_Up'
                                            ? move.level
                                            : null}
                                    </p>
                                </div>
                            ))}
                    </div>
                ) : null
            ) : null
        );
        return methods;
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
                <div className={classes.GenerationRow}>
                    {renderData(groupByMethods())}
                </div>
            </div>
        </div>
    );
};

export default MovesAccordion;