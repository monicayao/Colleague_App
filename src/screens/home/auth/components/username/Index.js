import React from 'react';
import {StyleSheet } from 'react-native';
import { Container, Text, Header, Left, Right, Body, Button, Icon, Tab, Tabs } from 'native-base';
import UsernameLogin from './Login';
import UsernameSignup from './Signup';
import {index} from './stylesheet';

const launchscreenBg = require("./back.png");

const styles = StyleSheet.create(index);

export default class IndexUsername extends React.Component {


  goToLoginScreen = () => {
    this.tabView.goToPage(1);
  }

  render() {
    const backButton = () => {
        return (
          <Button style={{backgroundColor: "#CDB5CD"}} onPress={this.props.homeCallback}>
            <Icon name="arrow-back" />
          </Button>
        );
    }
    return (
      <Container >
        <Header style={{ height: 80, backgroundColor: "#CDB5CD", }} >
          <Left>
            {backButton()}
          </Left>
          <Body >
            <Text style={{fontSize: 24, color: '#fff'}}>Colleague</Text>
          </Body>
          <Right />
        </Header>
        <Tabs ref={(tabView) => {this.tabView=tabView}}>
        
          <Tab style={{backgroundColor: "#CDB5CD"}} heading="Signup">
            <UsernameSignup loginCallback={this.props.loginCallback}/>
          </Tab>
          <Tab style={{backgroundColor: "#CDB5CD"}} heading="Login">
            <UsernameLogin loginCallback={this.props.loginCallback}/>
          </Tab>
    
        </Tabs>
      </Container>
    );
  }
}
