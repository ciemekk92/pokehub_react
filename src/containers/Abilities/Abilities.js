import React from 'react';
import { connect } from 'react-redux';
import AbilityBox from '../../components/UI/AbilityBox/AbilityBox';

const Abilities = props => {
   let abilitiesMap = props.abilities
      .reverse()
      .map(element => (
         <AbilityBox
            key={element.slot}
            type="Ability"
            value={element.ability.name}
            isHidden={element.is_hidden}
         />
      ));
   return <React.Fragment>{abilitiesMap}</React.Fragment>;
};

const mapStateToProps = state => {
   return {
      abilities: state.result.abilities
   };
};

export default connect(mapStateToProps)(Abilities);
