import React from 'react';
import { connect } from 'react-redux';
import classes from './Types.module.css';
import TypesBox from '../../components/UI/TypesBox/TypesBox';
import { capitalizeFirstLetter } from '../../shared/utility';

const Types = props => {
    const splitTypes = array => {
        const typesArray = [];
        for (const element of array) {
            typesArray.push(element.type.name);
        }
        return typesArray;
    };
    let typesIterable = splitTypes(props.types)
        .reverse()
        .map(element => (
            <TypesBox
                key={capitalizeFirstLetter(element)}
                type="Type"
                value={capitalizeFirstLetter(element)}
            />
        ));
    return <div className={classes.Container}>{typesIterable}</div>;
};

const mapStateToProps = state => {
    return {
        types: state.result.types
    };
};

export default connect(mapStateToProps)(Types);
