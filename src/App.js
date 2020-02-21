import React from 'react';
import Layout from './hoc/Layout/Layout';
import Search from './containers/Search/Search';
import Result from './containers/Result/Result';

const App = () => {
   return (
      <React.Fragment>
         <Layout>
            <Search />
            <Result />
         </Layout>
      </React.Fragment>
   );
};

export default App;
