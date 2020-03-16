import React from 'react';
import classes from './Landing.module.css';
import blastoise from '../../../assets/blastoise.png';
import charizard from '../../../assets/charizard.png';
import venusaur from '../../../assets/venusaur.png';

const Landing = () => {
    return (
        <div className={classes.Landing}>
            <img
                className={classes.Venusaur}
                src={venusaur}
                alt={'PokeImage'}
            />
            <h1 className={classes.H1}>Welcome to PokeHUB! </h1>

            <h2 className={classes.H2}>What is this? I don't even...</h2>
            <p className={classes.Normal}>
                PokeHUB is a convenient web app designed to display data about
                almost any* Pokemon out there! No matter if you're searching
                from your PC or mobile!
            </p>
            <p className={classes.Small}>
                * Not including Generation VIII YET.
            </p>

            <h2 className={classes.H2}>What type of data can I get here?</h2>
            <p className={classes.Normal}>All about Pokemon! Here goes:</p>
            <ul>
                <li className={classes.ListItem}>Name / ID</li>
                <img
                    className={classes.Charizard}
                    src={charizard}
                    alt={'PokeImage'}
                />
                <li className={classes.ListItem}>Sprites</li>
                <li className={classes.ListItem}>Types</li>
                <li className={classes.ListItem}>Abilities</li>
                <li className={classes.ListItem}>Metrics</li>
                <li className={classes.ListItem}>Base Stats</li>
                <li className={classes.ListItem}>
                    Moves in certain Generation
                </li>
            </ul>

            <h2 className={classes.H2}>How does it work?</h2>
            <p className={classes.Normal}>
                Simple! Just enter the name or ID of the Pokemon you're looking
                for into the input above and press Search or Enter on your
                keyboard. Or - if you're not sure what you're looking for -
                press Random to display a random Pokemon!
            </p>
            <h2 className={classes.H2}>
                *insert something* doesn't work! What now?!
            </h2>
            <img
                className={classes.Blastoise}
                src={blastoise}
                alt={'PokeImage'}
            />
            <p className={classes.Normal}>
                Don't you worry fellow trainer! If you encounter a wild bug, not
                working feature or something you think could be done better,
                feel free to message me on{' '}
                <a
                    className={classes.Link}
                    href={'https://www.facebook.com/przemyslaw.reducha'}
                >
                    Facebook
                </a>{' '}
                or pass an Issue on project's page on{' '}
                <a
                    className={classes.Link}
                    href={'https://github.com/ciemekk92/pokehub_react'}
                >
                    GitHub
                </a>
                .
            </p>
            <p className={classes.Normal}>
                The data is provided by{' '}
                <a className={classes.Link} href={'https://pokeapi.co'}>
                    PokeAPI.
                </a>
            </p>
        </div>
    );
};

export default React.memo(Landing);
