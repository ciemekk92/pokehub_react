import React from 'react';
import classes from './TypesBox.module.css';
import styled from 'styled-components';

const TypesBox = props => {
    const ParagraphType = styled.p`
        margin: 2px 0 0 5px;
        font-size: 10px;
        text-align: left;
    `;
    const ParagraphValue = styled.p`
        font-size: 1em;
        text-align: center;
        margin: -5px auto auto auto;
    `;
    return (
        <div className={`${classes.TypesBox} ${classes[props.value]}`}>
            <ParagraphType>{props.type}</ParagraphType>
            <ParagraphValue>{props.value}</ParagraphValue>
        </div>
    );
};

export default TypesBox;
