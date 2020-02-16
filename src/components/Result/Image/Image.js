import React from 'react';
import classes from './Image.module.css';
import styled from 'styled-components';

const Image = props => {
   const ParagraphType = styled.p`
      margin: 2px 0 0 5px;
      font-size: 10px;
      text-align: left;
   `;
   return (
      <div className={classes.ImageBox}>
         <ParagraphType>{props.type}</ParagraphType>
         <img
            className={classes.Image}
            src={props.imageSource}
            alt={props.alt}
         />
      </div>
   );
};

export default Image;
