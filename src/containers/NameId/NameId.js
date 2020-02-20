import React from 'react';
import { connect } from 'react-redux';
import { capitalizeFirstLetter } from '../../shared/utility';
import NameBox from '../../components/UI/NameBox/NameBox';

const NameId = props => {
   return (
      <React.Fragment>
         <NameBox type="Name" value={capitalizeFirstLetter(props.name)} />
         <NameBox type="ID" value={'#' + props.id} />
      </React.Fragment>
   );
};

const mapStateToProps = state => {
   return {
      name: state.result.name,
      id: state.result.id
   };
};

export default connect(mapStateToProps)(NameId);
