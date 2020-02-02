import React from 'react';
import SearchInput from '../../components/UI/SearchInput/SearchInput';
import Button from '../../components/UI/Button/Button';
import classes from './Layout.module.css';
import logo from '../../assets/logo.png';

const Layout = props => {
   return (
      <React.Fragment>
         <main className={classes.Content}>
            <img className={classes.MainLogo} src={logo} alt="logo" />
            <SearchInput />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
               <Button btnType="Search">Search!</Button>
               <Button btnType="Random">Random!</Button>
            </div>
            {props.children}
         </main>
      </React.Fragment>
   );
};

export default Layout;
