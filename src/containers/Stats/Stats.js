import React from 'react';
import { connect } from 'react-redux';
import { capitalizeFirstLetter } from '../../shared/utility';
import StatBox from '../../components/UI/StatBox/StatBox';

const Stats = props => {
    const shortenType = input => {
        if (input === 'special-attack') {
            return 'Sp-ATK';
        } else if (input === 'special-defense') {
            return 'Sp-DEF';
        } else {
            return input;
        }
    };
    return props.stats
        .map(element => (
            <StatBox
                key={capitalizeFirstLetter(element.stat.name)}
                type={capitalizeFirstLetter(shortenType(element.stat.name))}
                value={element.base_stat}
            />
        ))
        .reverse();
};

const mapStateToProps = state => {
    return {
        stats: state.result.stats
    };
};

export default connect(mapStateToProps)(Stats);
