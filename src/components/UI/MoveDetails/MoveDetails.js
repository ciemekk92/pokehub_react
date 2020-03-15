import React, { useRef, useState } from 'react';
import classes from './MoveDetails.module.css';
import Chevron from '../Chevron/Chevron';
import SpinnerSmall from '../SpinnerSmall/SpinnerSmall';
import axios from 'axios';
import typeClasses from '../TypesBox/TypesBox.module.css';
import {
    capitalizeAllFirstLetters,
    capitalizeFirstLetter,
    removeDashes
} from '../../../shared/utility';

const MoveDetails = props => {
    const [setActive, setActiveState] = useState('');
    const [setDetails, setDetailsState] = useState({
        generation: '',
        name: '',
        power: null,
        pp: null,
        type: ''
    });
    const [setHeight, setHeightState] = useState('0px');
    const [setRotate, setRotateState] = useState(true);

    const detailsContent = useRef(null);

    const toggleDetails = () => {
        setActiveState(setActive === '' ? 'active' : '');
        setHeightState(
            setActive === 'active'
                ? '0px'
                : `${detailsContent.current.scrollHeight + 200}px`
        );
        setRotateState(setActive === 'active');
    };

    const onClickHandler = () => {
        toggleDetails();
        if (setDetails.name === '') {
            axios
                .get(`https://pokeapi.co/api/v2/move/${props.name}`)
                .then(response => {
                    setDetailsState({
                        ...setDetails,
                        name: response.data.name,
                        power: response.data.power,
                        pp: response.data.pp,
                        type: response.data.type
                    });
                })
                .catch(error => console.log(error));
        }
    };

    return (
        <div>
            <button
                className={`${classes.DetailsButton} ${
                    setActive === 'active' ? classes.active : null
                }`}
                onClick={onClickHandler}
            >
                <p className={classes.DetailsName}>
                    {capitalizeAllFirstLetters(removeDashes(props.name))}
                </p>
                {props.method === 'level_Up' ? (
                    <p className={classes.DetailsLevel}>{props.level}</p>
                ) : null}
                <Chevron
                    className={`${
                        setRotate
                            ? `${classes.DetailsChevron}`
                            : `${classes.DetailsChevron} ${classes.rotate}`
                    }`}
                    width={10}
                    fill={'#ccc'}
                />
            </button>
            <div
                ref={detailsContent}
                className={classes.DetailsContent}
                style={{ maxHeight: `${setHeight}` }}
            >
                {setDetails.name !== '' ? (
                    <div className={classes.DetailBox}>
                        <p className={classes.DetailParagraph}>
                            <strong>Game:</strong>{' '}
                            {capitalizeAllFirstLetters(
                                removeDashes(props.game)
                            )}
                        </p>
                        <p className={classes.DetailParagraph}>
                            <strong>Power:</strong> {setDetails.power}
                        </p>
                        <p className={classes.DetailParagraph}>
                            <strong>PP:</strong> {setDetails.pp}
                        </p>
                        <div
                            className={`${classes.DetailType} ${
                                typeClasses[
                                    capitalizeFirstLetter(setDetails.type.name)
                                ]
                            }`}
                        >
                            <p className={classes.DetailParagraph}>
                                <strong>Type:</strong>{' '}
                                {capitalizeFirstLetter(setDetails.type.name)}{' '}
                            </p>
                        </div>
                    </div>
                ) : (
                    <SpinnerSmall />
                )}
            </div>
        </div>
    );
};

export default React.memo(MoveDetails);
