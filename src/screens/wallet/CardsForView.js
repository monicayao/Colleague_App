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
} from "native-base";

import styles from "./styles";
const logo = require("../../../assets/logo.png");
const cardImage = require("../../../assets/drawer-cover.png");

class CardsForView extends Component{
  
  
    render(){  
      const {name, org} = this.props;
      return( 

          <Card style={styles.mb}>
            <CardItem>
              <Left>
                <Thumbnail source={logo} />
                <Body>
                  <Text>{this.props.name} </Text>
                  <Text note>{this.props.org}</Text>
                </Body>
              </Left>
            </CardItem>
        
            <CardItem cardBody>
              <Image
                style={{
                  resizeMode: "cover",
                  width: null,
                  height: 200,
                  flex: 1
                }}
                source={cardImage}
              />
            </CardItem>
        
            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button transparent>
                  <Icon active name="alarm" />
                  <Text>Reminders  </Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="logo-linkedin" />
                  <Text>LinkedIn</Text>
                </Button>
              </Body>
              <Right>
                <Button transparent>
                  <Icon active name="mail" />
                  <Text>Email</Text>
                </Button>
              </Right>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
  );
}
};

export default CardsForView;