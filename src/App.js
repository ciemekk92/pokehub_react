import React from 'react';
import Layout from './hoc/Layout/Layout';
import Search from './containers/Search/Search';
import Result from './containers/Result/Result';
import { connect } from 'react-redux';

const App = props => {
   return (
      <React.Fragment>
         <Layout>
            <Search />
            <Result />
         </Layout>
      </React.Fragment>
   );
};

const mapStateToProps = state => {
   return {
      displayResult: state.result.displayResult
   };
};

export default connect(mapStateToProps)(React.memo(App));
