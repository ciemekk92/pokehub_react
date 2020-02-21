import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import classes from './Result.module.css';
import Metrics from '../Metrics/Metrics';
import Sprites from '../Sprites/Sprites';
import Abilities from '../Abilities/Abilities';
import Stats from '../Stats/Stats';
import Types from '../Types/Types';
import NameId from '../NameId/NameId';
import { connect } from 'react-redux';

const VerticalDivider = styled.div`
   width: 3px;
   height: 80%;
   background-color: white;
`;

const Result = props => {
   return (
      <div className={classes.Box} style={{ display: props.displayBox }}>
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
      </div>
   );
};

const mapStateToProps = state => {
   return {
      displayBox: state.result.displayBox
   };
};
export default connect(mapStateToProps)(Result);
