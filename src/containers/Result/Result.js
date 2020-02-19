import React from 'react';
import classes from './Result.module.css';
import Metrics from '../Metrics/Metrics';
import Sprites from '../Sprites/Sprites';
import Stats from '../Stats/Stats';
import Types from '../Types/Types';
import NameId from '../NameId/NameId';
import { connect } from 'react-redux';

const Result = props => {
   return (
      <div className={classes.Box} style={{ display: props.displayBox }}>
         <div className={classes.BoxRow}>
            <Sprites />
            <NameId />
         </div>
         <div className={classes.BoxRowTypes}>
            <Types />
         </div>
         <div className={classes.BoxRow}>
            <Metrics />
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
