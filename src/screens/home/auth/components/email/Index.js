import React from 'react';
import {StyleSheet} from 'react-native';
import { Container, Text, Header, Left, Right, Body, Button, Icon, Tab, Tabs } from 'native-base';
import EmailLogin from './Login';
import EmailSignup from './Signup';
import {index} from '../../stylesheet';

const styles = StyleSheet.create(index);

export default class IndexEmail extends React.Component {

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
          <EmailSignup loginCallback={this.props.loginCallback}/>
        </Tab>
        <Tab style={{backgroundColor: "#CDB5CD"}} heading="Login">
          <EmailLogin loginCallback={this.props.loginCallback}/>
        </Tab>
  
      </Tabs>
    </Container>
    );
  }
}
