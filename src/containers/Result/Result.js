import React from 'react';
import classes from './Result.module.css';
import Image from '../../components/Result/Image/Image';
import Name from '../../components/UI/Name/Name';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Paragraph = styled.p`
   color: black;
   text-align: center;
`;

const splitTypes = array => {
   const typesArray = [];
   for (const element of array) {
      typesArray.push(element.type.name);
   }
   return typesArray;
};

const capitalizeFirstLetter = string => {
   return string.charAt(0).toUpperCase() + string.slice(1);
};

const Result = props => {
   return (
      <React.Fragment>
         <div className={classes.Box} style={{ display: props.displayBox }}>
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center'
               }}
            >
               <Image imageSource={props.sprite} />
               <Name value={capitalizeFirstLetter(props.name)} />
               <Name value={props.id} />
            </div>
            <Paragraph>{splitTypes(props.types).join(' ')}</Paragraph>
         </div>
      </React.Fragment>
   );
};

const mapStateToProps = state => {
   return {
      id: state.result.id,
      name: state.result.name,
      sprite: state.result.sprite,
      types: state.result.types,
      displayBox: state.result.displayBox
   };
};
export default connect(mapStateToProps)(Result);
