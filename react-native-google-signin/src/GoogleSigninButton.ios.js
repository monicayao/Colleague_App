import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  NativeAppEventEmitter,
  NativeModules,
  requireNativeComponent,
  ViewPropTypes,
} from 'react-native';

const { RNGoogleSignin } = NativeModules;
const RNGoogleSigninButton = requireNativeComponent('RNGoogleSigninButton', null);

export class GoogleSigninButton extends Component {
  static propTypes = {
    ...ViewPropTypes,
    size: PropTypes.number,
    color: PropTypes.number,
    onPress: PropTypes.func.isRequired,
  };

  handleOnPress = () => {
    if (this.props.onPress) {
      this.props.onPress();
    }
  };

  render() {
    const { style, onPress, ...props } = this.props;

    return (
      <RNGoogleSigninButton
        style={[{ backgroundColor: 'transparent' }, style]}
        onPress={this.handleOnPress}
        {...props}
      />
    );
  }
}

GoogleSigninButton.Size = {
  Icon: '48 x 48',
  Standard: '230 x 48',
  Wide: '312 x 48'
  };
  
  GoogleSigninButton.Color = {
  Auto: 'white',
  Light: 'blue',
  Dark: 'grey'
  };
