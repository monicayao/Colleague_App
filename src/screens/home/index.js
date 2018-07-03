//<View style={styles1.container}>
//<TouchableOpacity onPress={this._fbAuth}>
//<Text>Login with Facebook</Text>
//</TouchableOpacity>
//</View>
import React, { Component } from "react";
import { ImageBackground, View, StatusBar, TouchableOpacity, AppRegistry, StyleSheet, Platform, AsyncStorage } from "react-native";
import {
  Container,
  Button,
  Item,
  Label,
  Input,
  Form,
  H3,
  Text,
  Spinner
} from "native-base";

import FBSDK, {LoginManager} from 'react-native-fbsdk';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

import {default as AppIndexScreen} from './sidebar/';
import AuthHome from './auth/components/AuthHome';
import {clusterName} from './Hasura';
import {fetchSession} from './auth/actions';


const launchscreenBg = require("../../../assets/back.png");
const launchscreenLogo = require("../../../assets/cardlogo.jpg");

class Home extends Component {
  
  _fbAuth() {
    LoginManager.logInWithReadPermissions(['public_profile']).then(
       function(result) {
          if (result.isCancelled) {
             alert('Login cancelled');
          } else {
             alert('Login success with permissions: '
             +result.grantedPermissions.toString());
          }
       },
       function(error) {
          alert('Login fail with error: ' + error);
       }
    );
 }

 static navigationOptions = {
  header: null
};

state = {
  session: {
    isLoggedIn: false,
    sessionInfo: {}
  },
  loading: true
}

setLoadingIndicator = () => {
  this.setState({
    ...this.state,
    loading: true
  });
}

stopLoadingIndicator = () => {
  this.setState({
    ...this.state,
    loading: false
  });
}

async componentWillMount() {
  try {
    const sessionInfo = await fetchSession();
    if (sessionInfo) {
      const userInfoResp = await this.getUserInfo(sessionInfo);
    }
    else {
      this.stopLoadingIndicator();
    }
  }
  catch (e) {
    console.log(e);
    this.stopLoadingIndicator();
  }
}

getUserInfo = async (sessionInfo) => {
  const userInfoResp = await fetch(`https://auth.${clusterName}.hasura-app.io/v1/user/info`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + sessionInfo.token,
      'Content-Type': 'application/json'
    }
  });
  if (userInfoResp.status == 200) {
    const userInfo = await userInfoResp.json();
    this.setState({
      ...this.state,
      session: {
        isLoggedIn: true,
        sessionInfo,
        userInfo
      },
      loading: false
    });
  } else {
    this.stopLoadingIndicator();
  }
}

completeLogin = (sessionInfo) => {
  this.setState({
    ...this.state,
    session: {
      isLoggedIn: true,
      sessionInfo
    }
  })
}

deleteLocalSession = async () => {
  await AsyncStorage.removeItem(`@${clusterName}:myapp`);
}

logout = async () => {
  this.setLoadingIndicator();
  this.deleteLocalSession();
  try {
    await fetch(`https://auth.${clusterName}.hasura-app.io/v1/user/logout`, {
      'method': 'POST',
      'headers': {
        'Authorization': 'Bearer ' + this.state.session.sessionInfo.token
      }
    });
    this.setState({
      ...this.state,
      session: {
        isLoggedIn: false,
        sessionInfo: null
      },
      loading: false
    });
  } catch (e) {
    console.log(e);
    this.setState({
      ...this.state,
      session: {
        isLoggedIn: false,
        sessionInfo: null
      },
      loading: false
    });
  }
}
 
  render() {

    if (this.state.loading) {
      return (
        <View style={styles.container} >
          <Spinner />
        </View>
      );
    }
    if (this.state.session.isLoggedIn) {
      return (
        <AppIndexScreen logoutCallback={this.logout} sessionInfo={this.state.session.sessionInfo}
        navigation = {this.props.navigation}/>
      );
    }

    return (
      <Container>
      <View style={styles.container} >
        <AuthHome loginCallback={this.completeLogin}/>
     
    
      </View>
      </Container>
    );
  }
}
const styles1 = StyleSheet.create({
  container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
  },
  welcome: {
     fontSize: 20,
     textAlign: 'center',
     margin: 10,
  },
  instructions: {
     textAlign: 'center',
     color: '#333333',
     marginBottom: 5,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: "#CDB5CD",
  },
  header: {
  },
  headerText: {
    color: "#fff",
  },
  itemContainer: {
    marginVertical: 20,
    marginHorizontal: 40,
  },
  textbox: {
    height: 40,
    marginVertical: 20,
    marginHorizontal: 20,
    padding: 10
  }
});

AppRegistry.registerComponent('Home', () => Home);
export default Home;

