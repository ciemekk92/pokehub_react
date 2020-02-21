import React from 'react';
import { connect } from 'react-redux';
import { capitalizeFirstLetter } from '../../shared/utility';
import StatBox from '../../components/UI/StatBox/StatBox';

const Stats = props => {
   let baseStats = props.stats
      .map(element => (
         <StatBox
            key={element.stat.name}
            type={capitalizeFirstLetter(element.stat.name)}
            value={element.base_stat}
         />
      ))
      .reverse();

   return baseStats;
};

const mapStateToProps = state => {
   return {
      stats: state.result.stats
   };
};

export default connect(mapStateToProps)(Stats);
