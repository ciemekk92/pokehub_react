import React from 'react';
import Layout from './hoc/Layout/Layout';
import Search from './containers/Search/Search';

const App = () => {
   return (
      <React.Fragment>
         <Layout>
            <Search />
         </Layout>
      </React.Fragment>
   );
};

export default App;
