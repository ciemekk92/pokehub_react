import React from 'react';

import classes from './Layout.module.css';
import logo from '../../assets/logo.png';

const Layout = props => {
   return (
      <React.Fragment>
         <main className={classes.Content}>
            <img className={classes.MainLogo} src={logo} alt="logo" />

            {props.children}
         </main>
      </React.Fragment>
   );
};

export default Layout;
