const React = require("react-native");
import {
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
const { StyleSheet } = React;


export default {
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  },
  topButtons: {
    flex: 1,
    width: Dimensions.get('window').width,
    alignItems: 'flex-start',
  },
  bottomButtons: {
    flex: 1,
    width: Dimensions.get('window').width,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  flipButton: {
    flex: 1,
    marginTop: -140,
    right: 20,
    alignSelf: 'flex-end',
  },
  recordingButton: {
    marginBottom: -150,
  },
  backwardsButton: {
    flex: 1,
    marginTop: -510,
    left: -360,
    alignSelf: 'flex-end',
  },
};
