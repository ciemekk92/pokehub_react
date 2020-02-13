import React from 'react';
import classes from './Name.module.css';
import styled from 'styled-components';

const Name = props => {
   const ParagraphType = styled.p`
      margin: 2px 0 0 5px;
      font-size: 10px;
      text-align: left;
   `;
   const ParagraphValue = styled.p`
      padding: 0 0 10px 0;
      font-size: 1em;
      text-align: center;
      margin: 0;
   `;
   return (
      <div className={classes.Name}>
         <ParagraphType>{props.type}</ParagraphType>
         <ParagraphValue>{props.value}</ParagraphValue>
      </div>
   );
};

export default Name;
