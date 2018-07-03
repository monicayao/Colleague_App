import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Card,
  CardItem,
  Thumbnail,
  List,
  ListItem,
  Footer,
  FooterTab,
  Left,
  Right,
  Body,
  Segment,
  View,
  Fab,
  Form, 
  Item,
  Input, 
  Label
} from "native-base";


import styles from "./styles";
import CardsForView from "./CardsForView";
const logo = require("../../../assets/logo.png");
const cardImage = require("../../../assets/drawer-cover.png");

class NewContact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  return( 
    <Container>
        <Header
        style={{ backgroundColor: "#B08CB2" }}
        androidStatusBarColor="#dc2015"
        iosBarStyle="light-content"
        >
            <Left>
                <Button transparent onPress={() => this.props.navigation.goBack()}>
                    <Icon name="arrow-back" style={{ color: "#FFF" }} />
                </Button>
            </Left>
            <Body>
                <Title style={{ color: "#FFF" }}> New Contact </Title>
            </Body>
            <Right>
                <Button transparent>
                    <Icon name="download" style={{ color: "#FFF" }} />
                </Button>
            </Right>
        </Header>
      
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Name</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Organization</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Phone</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input />
            </Item>
          </Form>
        </Content>

    </Container>
  );
}
};

export default NewContact;