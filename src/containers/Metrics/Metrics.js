import React from 'react';
import { connect } from 'react-redux';
import DataBox from '../../components/UI/DataBox/DataBox';

const Metrics = props => {
   return (
      <React.Fragment>
         <DataBox type="Height" value={props.height / 10 + ' m'} />
         <DataBox type="Weight" value={props.weight / 10 + ' kg'} />
         <DataBox type="Base Experience" value={props.baseExperience} />
      </React.Fragment>
   );
};

const mapStateToProps = state => {
   return {
      height: state.result.height,
      weight: state.result.weight,
      baseExperience: state.result.baseExperience
   };
};
export default connect(mapStateToProps)(Metrics);
