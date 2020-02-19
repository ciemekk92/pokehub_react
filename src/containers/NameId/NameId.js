import React from 'react';
import { connect } from 'react-redux';
import { capitalizeFirstLetter } from '../../shared/utility';
import DataBox from '../../components/UI/DataBox/DataBox';

const NameId = props => {
   return (
      <React.Fragment>
         <DataBox type="Name" value={capitalizeFirstLetter(props.name)} />
         <DataBox type="ID" value={'#' + props.id} />
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
