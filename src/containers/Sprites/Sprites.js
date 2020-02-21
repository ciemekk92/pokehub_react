import React from 'react';
import { connect } from 'react-redux';
import Image from '../../components/Result/Image/Image';

const Sprites = props => {
   return (
      <React.Fragment>
         <Image type={'Front'} imageSource={props.spriteFront} />
         {props.spriteBack ? (
            <Image type={'Back'} imageSource={props.spriteBack} />
         ) : null}
      </React.Fragment>
   );
};

const mapStateToProps = state => {
   return {
      spriteFront: state.result.spriteFront,
      spriteBack: state.result.spriteBack
   };
};

export default connect(mapStateToProps)(Sprites);
