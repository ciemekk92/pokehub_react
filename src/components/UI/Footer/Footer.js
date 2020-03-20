import React from 'react';
import classes from './Footer.module.css';

const Footer = props => {
    return (
        <div>
            <div className={classes.Phantom} />
            <div className={classes.Footer}>
                <p className={classes.Paragraph}>
                    PokeHub &copy;2020 by Przemyslaw Reducha. Powered by&nbsp;
                    <a className={classes.Link} href={'https://pokeapi.co'}>
                        PokeAPI
                    </a>
                    .
                </p>
            </div>
        </div>
    );
};

export default React.memo(Footer);
