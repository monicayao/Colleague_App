import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Container, Header, Left, Body, Right, Text, Spinner, Root} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {home} from '../stylesheet';
import {fetchAuthConf} from '../actions';
import IndexUsername from './username/Index';
import IndexOtp from './otp/Index';
import EmailSignup from './email/Signup';
import EmailLogin from './email/Login';
import IndexEmail from './email/Index';
import {handleGoogleAuth} from './google/actions';
import {storeSession} from '../actions';
const styles = StyleSheet.create(home);

export default class AuthHome extends React.Component {

  static navigationOptions = {
    header: null
  };

  constructor (props) {
    super(props);
    this.state = {
      loading: true,
      loginScreenOpen: null,
      authConf: null,
      isError: false,
    }
  }

  async componentWillMount () {
    const authConf = await fetchAuthConf();
    this.getLoginMethods(authConf);
  }

  getLoginMethods = (authConf) => {
    const loginMethods = [];
    if (!authConf.success) {
      this.setState({
        ...this.state,
        isError: true,
        loading: false
      });
      return loginMethods;
    }
    if (authConf.username) {
      loginMethods.push("Username");
    }
    if (authConf.email) {
      loginMethods.push("Email");
    }
    if (authConf.mobileOtp) {
      loginMethods.push("OTP");
    }
    if (authConf.googleArray) {
      loginMethods.push("Google");
    }
    this.setState({
      ...this.state, isError: false, loading: false, authConf, loginMethods
    });
  }

  setLoading = () => {
    this.setState({
      ...this.state,
      loading: true
    })
  }

  unsetLoading = () => {
    this.setState({
      ...this.state,
      loading: false
    })
  }

  backToHome = () => {
    this.setState({
      ...this.state,
      loginScreenOpen: null,
      signupScreenOpen: null
    });
  }



  openLoginScreen = (method) => {
    this.setState({
      ...this.state, loginScreenOpen: method
    })
  }

  usernameLoginButton = () => {
    
    return (
      <View style={styles.homeButtonContainer}>
        <FontAwesome.Button
          style={styles.button}
          name="user"
          backgroundColor="indigo"
          onPress={() => this.openLoginScreen("Username")}>
          <Text style={styles.buttonText}>Login with Username</Text>
        </FontAwesome.Button>
      </View>
    );
  }

  emailLoginButton = () => {
   
    return (
      <View style={styles.homeButtonContainer}>
        <FontAwesome.Button
          style={styles.button}
          name="envelope"
          backgroundColor="darkorange"
          onPress={() => this.openLoginScreen("Email")}>
          <Text style={styles.buttonText}>Login with Email</Text>
        </FontAwesome.Button>
      </View>
    );
  }

  mobileLoginButton = () => {
   
    return (
      <View style={styles.homeButtonContainer}>
        <FontAwesome.Button
          style={styles.button}
          name="mobile-phone"
          backgroundColor="forestgreen"
          onPress={() => this.openLoginScreen("OTP")}>
          <Text style={styles.buttonText}>Login with Mobile-OTP</Text>
        </FontAwesome.Button>
      </View>
    );
  }

  googleButton = () => {
      return (
        <View style={styles.homeButtonContainer}>
          <FontAwesome.Button style={styles.button} name="google" backgroundColor='#db3236' onPress={() => handleGoogleAuth(this.state.authConf.googleArray[0], this.state.authConf.googleArray[1], this.props.loginCallback, this.setLoading, this.unsetLoading)} >
            <Text style={styles.buttonText}>Login with Google</Text>
          </FontAwesome.Button>
        </View>
      )
  }

  error() {
    return (
      <View style={styles.homeContainer}>
        <Text> This app is not configured with any auth provider </Text>
      </View>
    );
  }

  loadingScreen = () => {
    return (
      <View style={styles.container}>
        <Spinner />
      </View>
    );
  }

  render() {
    const {
      loading,
      isError,
      authConf,
      loginMethods,
      loginScreenOpen
    } = this.state;

    if (loading) {
      return this.loadingScreen();
    }

    if (isError) {
      return this.error();
    }

    if (loginScreenOpen) {
      if (loginScreenOpen === 'Username') {
        return (
          <IndexUsername homeCallback={this.backToHome} loginCallback={this.props.loginCallback} shouldShowBackButton={this.state.loginMethods.length !== 1}/>
        )
      }
      if (loginScreenOpen === 'OTP') {
        return (
          <IndexOtp homeCallback={this.backToHome} loginCallback={this.props.loginCallback} task='login' shouldShowBackButton={this.state.loginMethods.length !== 1}/>
        )
      }
      if (loginScreenOpen === 'Email') {
        return (
          <IndexEmail homeCallback={this.backToHome} loginCallback={this.props.loginCallback}  shouldShowBackButton={this.state.loginMethods.length !== 1}/>
        )
      }
    }
    
    return (
      <Root>
        <Container>
          <Header style={styles.header}>
            <Left />
            <Body>
              <Text style={styles.headerText}>Login</Text>
            </Body>
            <Right />
          </Header>
          <View style={styles.homeContainer}>
            {this.usernameLoginButton()}
            {this.emailLoginButton()}
            {this.mobileLoginButton()}
            {this.googleButton()}
          </View>
        </Container>
      </Root>
    );
  }
}

