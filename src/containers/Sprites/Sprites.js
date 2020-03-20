import React from 'react';
import { connect } from 'react-redux';
import Image from '../../components/Result/Image/Image';

const Sprites = props => {
    return (
        <>
            <Image type={'Front'} imageSource={props.spriteFront} />
            {props.spriteBack ? (
                <Image type={'Back'} imageSource={props.spriteBack} />
            ) : null}
        </>
    );
};

const mapStateToProps = state => {
    return {
        spriteFront: state.result.spriteFront,
        spriteBack: state.result.spriteBack
    };
};

export default connect(mapStateToProps)(Sprites);
