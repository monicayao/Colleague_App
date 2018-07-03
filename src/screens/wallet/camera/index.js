'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  CameraRoll,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { RNCamera } from 'react-native-camera';
import styles from "./styles";



export default class CameraPage extends Component {

  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)
      console.log(data.uri);
      CameraRoll.saveToCameraRoll(data.uri);
    }
  }

  state = {
    type: RNCamera.Constants.Type.back,
  }

  flipCamera = () =>
    this.setState({ type: this.state.type === RNCamera.Constants.Type.back ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back })
  
  saveToCameraRoll = () => {
      CameraRoll.saveToCameraRoll(this.state.path).then(Alert.alert('Success', 'Saved to camera roll!'))
  }

  backButton = () =>
  this.props.navigation.goBack()

  render() {
    const { type } = this.state;
    return (
      <View style={styles.container}>
      <RNCamera
        ref={(cam) => {
          this.camera = cam
        }}
        type={type}
        style={styles.preview}
      />
      <View style={styles.topButtons}>
        <TouchableOpacity onPress={this.flipCamera} style={styles.flipButton}>
          <Icon name="refresh" size={35} color="purple" />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomButtons}>
        <TouchableOpacity   
        onPress={this.takePicture}
        style = {styles.capture}>
          <Icon name="camera" size={50} color="purple" />
        </TouchableOpacity>
      </View>
      <View style={styles.topButtons}>
        <TouchableOpacity onPress={this.backButton} style={styles.backwardsButton}>
          <Icon name="arrow-circle-o-left" size={35} color="purple" />
        </TouchableOpacity>
      </View>
      </View>
    );
  }
};


  AppRegistry.registerComponent('CameraPage', () => CameraPage);











