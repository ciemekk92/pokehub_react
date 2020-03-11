import React from 'react';
import { Transition } from 'react-transition-group';
import { connect } from 'react-redux';
import classes from './Result.module.css';
import Metrics from '../Metrics/Metrics';
import Sprites from '../Sprites/Sprites';
import Abilities from '../Abilities/Abilities';
import Stats from '../Stats/Stats';
import Types from '../Types/Types';
import Moves from '../Moves/Moves';
import NameId from '../NameId/NameId';

const Result = props => {
    return (
        <Transition in={props.displayResult} timeout={300} mountOnEnter>
            {state => (
                <div
                    className={`${classes.Box} ${
                        state === 'entering'
                            ? classes.ResultOpen
                            : state === 'entered'
                            ? classes.ResultVisible
                            : state === 'exiting'
                            ? classes.ResultClosed
                            : state === 'exited'
                            ? classes.ResultNotVisible
                            : null
                    }`}
                >
                    <div className={classes.BoxRow}>
                        <Sprites />
                        <NameId />
                    </div>
                    <div className={classes.BoxRow}>
                        <div className={classes.BoxColumn}>
                            <Abilities />
                            <Metrics />
                        </div>
                        <Types />
                    </div>
                    <div className={classes.BoxRow}>
                        <Stats />
                    </div>
                    <div className={classes.BoxColumn}>
                        <Moves />
                    </div>
                </div>
            )}
        </Transition>
    );
};

const mapStateToProps = state => {
    return {
        displayResult: state.result.displayResult
    };
};

export default connect(mapStateToProps)(React.memo(Result));
