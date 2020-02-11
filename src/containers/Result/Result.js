import React from 'react';
import classes from './Result.module.css';
import Image from '../../components/Result/Image/Image';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
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

const Result = props => {
   return (
      <React.Fragment>
         <div className={classes.Box}>
            <Image />
            <Paragraph>{props.id}</Paragraph>
            <Paragraph>{props.name}</Paragraph>
            <Paragraph>{props.sprite}</Paragraph>
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
      types: state.result.types
   };
};
export default connect(mapStateToProps)(Result);
