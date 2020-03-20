import React from 'react';
import { connect } from 'react-redux';
import MovesAccordion from '../../components/UI/MovesAccordion/MovesAccordion';
import { capitalizeFirstLetter, romanize } from '../../shared/utility';

const Moves = props => {
    const sortMoves = () => {
        let generations = {
            // generation I
            red_Blue_Generation1: [],
            yellow_Generation1: [],
            //generation II
            generation2: [],
            //generation III
            generation3: [],
            //generation IV (+ heart gold soul silver)
            generation4: [],
            //generation V
            generation5: [],
            //generation VI (+omega ruby alpha sapphire)
            generation6: [],
            //generation VII (+ultra sun and moon)
            generation7: [],
            // not needed
            other: []
        };
        props.moves.forEach(outer => {
            outer.version_group_details.forEach(inner => {
                let versionName;
                switch (inner.version_group.name) {
                    case 'yellow':
                        versionName = 'yellow_Generation1';
                        break;
                    case 'red-blue':
                        versionName = 'red_Blue_Generation1';
                        break;
                    case 'gold':
                    case 'silver':
                    case 'gold-silver':
                    case 'crystal':
                        versionName = 'generation2';
                        break;
                    case 'emerald':
                    case 'ruby-sapphire':
                    case 'ruby':
                    case 'sapphire':
                    case 'firered-leafgreen':
                    case 'firered':
                    case 'leafgreen':
                        versionName = 'generation3';
                        break;
                    case 'diamond-pearl':
                    case 'diamond':
                    case 'pearl':
                    case 'platinum':
                    case 'heartgold-soulsilver':
                    case 'heartgold':
                    case 'soulsilver':
                        versionName = 'generation4';
                        break;
                    case 'black-white':
                    case 'black-2-white-2':
                    case 'black':
                    case 'white':
                        versionName = 'generation5';
                        break;
                    case 'x-y':
                    case 'x':
                    case 'y':
                    case 'omega-ruby-alpha-sapphire':
                    case 'omega-ruby':
                    case 'alpha-sapphire':
                        versionName = 'generation6';
                        break;
                    case 'sun-moon':
                    case 'sun':
                    case 'moon':
                    case 'ultra-sun-ultra-moon':
                        versionName = 'generation7';
                        break;
                    default:
                        versionName = 'other';
                        break;
                }
                generations[versionName].push({
                    moveName: outer.move.name,
                    level: inner.level_learned_at,
                    method: inner.move_learn_method.name,
                    game: inner.version_group.name
                });
            });
        });
        return generations;
    };

    const generationAccordions = () => {
        const entries = Object.entries(sortMoves());
        return entries.map(element =>
            // skipping not-necessary entries
            element[0] !== 'other' ? (
                // checking if generation isn't empty
                element[1].length !== 0 ? (
                    <MovesAccordion
                        key={element[0]}
                        name={capitalizeFirstLetter(
                            [
                                element[0]
                                    .slice(0, element[0].length - 1)
                                    .replace(/_/g, ' '),
                                romanize(
                                    element[0].slice(element[0].length - 1)
                                )
                            ].join(' ')
                        )}
                        data={element[1]}
                    />
                ) : null
            ) : null
        );
    };

    return generationAccordions();
};

const mapStateToProps = state => {
    return {
        moves: state.result.moves
    };
};

export default connect(mapStateToProps)(Moves);
