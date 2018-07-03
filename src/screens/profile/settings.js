import React, { Component } from "react";
import { Image } from "react-native";
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
  Badge,
  Body,
  Form,
  Label,
  Item,
  Input,
  Segment
} from "native-base";

import styles from "./styles";

class settings extends Component {
  
    render() {
      return (

        <Container style={styles.container}>
          <Header
          style={{ backgroundColor: "#CDB5CD", }} >
            <Left>
              <Button
                      transparent onPress={() => this.props.navigation.goBack()}>
                <Icon style={{ color: "#fff" }} name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title style={{ color: "#fff" }} >Settings</Title>
            </Body>
            <Right />
          </Header>

          
  
        </Container>
      );
    }
  }
  
  export default settings;
  