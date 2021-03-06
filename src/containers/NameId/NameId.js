import React from 'react';
import { connect } from 'react-redux';
import { capitalizeAllFirstLetters, removeDashes } from '../../shared/utility';
import NameBox from '../../components/UI/NameBox/NameBox';

const NameId = props => {
    return (
        <>
            <NameBox
                type="Name"
                value={capitalizeAllFirstLetters(removeDashes(props.name))}
            />
            <NameBox type="ID" value={'#' + props.id} />
        </>
    );
};

const mapStateToProps = state => {
    return {
        name: state.result.name,
        id: state.result.id
    };
};

export default connect(mapStateToProps)(NameId);
