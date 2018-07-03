import React from 'react';
import {StyleSheet} from 'react-native';
import { Container, Text, Header, Left, Right, Body, Button, Icon, Tab, Tabs } from 'native-base';
import OTP from './OTP';
import {index} from '../../stylesheet';

const styles = StyleSheet.create(index);

export default class IndexOtp extends React.Component {

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
        <Tabs initialPage={0} ref={(tabView) => {this.tabView=tabView}}>
          <Tab style={{backgroundColor: "#CDB5CD"}} heading="Signup">
            <OTP loginCallback={this.props.loginCallback} task="signup"/>
          </Tab>
          <Tab style={{backgroundColor: "#CDB5CD"}} heading="Login">
            <OTP loginCallback={this.props.loginCallback} task="login"/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
