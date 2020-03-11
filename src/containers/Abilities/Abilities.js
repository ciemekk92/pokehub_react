import React from 'react';
import { connect } from 'react-redux';
import { capitalizeAllFirstLetters, removeDashes } from '../../shared/utility';
import classes from './Abilities.module.css';
import AbilityBox from '../../components/UI/AbilityBox/AbilityBox';

const Abilities = props => {
    let abilitiesMap = props.abilities.reverse().map(element => {
        return (
            <AbilityBox
                key={element.slot}
                type={'Ability'}
                value={capitalizeAllFirstLetters(
                    removeDashes(element.ability.name)
                )}
                isHidden={element.is_hidden}
            />
        );
    });
    return <div className={classes.Container}>{abilitiesMap}</div>;
};

const mapStateToProps = state => {
    return {
        abilities: state.result.abilities
    };
};

export default connect(mapStateToProps)(Abilities);
