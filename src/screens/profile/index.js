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
import SideBar from "../../../assets/propic.png"
const propic = require("../../../src/screens/home/sidebar/");

class Profile extends Component {
  
    render() {
      return (

        <Container style={styles.container}>

          <Header
          style={{ backgroundColor: "#CDB5CD", }} >
            <Left>
              <Button
                      transparent onPress={() => this.props.navigation.navigate("SideBar")}>
                <Icon name="menu" style={{ color: "#fff" }}/>
              </Button>
            </Left>
            <Body>
              <Title style={{ color: "#fff" }} >Your Profile</Title>
            </Body>
            <Right>
              <Button transparent onPress={() => this.props.navigation.navigate("settings")}>
                <Icon style={{ color: "#fff" }} name="settings" />
              </Button>
            </Right>
          </Header>

     <Image source={propic} style={styles.img} />
     <Text style={styles.name}>John Doe</Text>

  
     <Form style={styles.form}>
       <Item inlineLabel>
         <Label>Phone Number</Label>
         <Input />
       </Item>
       <Item inlineLabel>
         <Label>Email</Label>
         <Input  />
       </Item>
       <Item inlineLabel last>
         <Label>LinkedIn</Label>
         <Input secureTextEntry />
       </Item>
     </Form>
    

   </Container>
      );
    }
  }
  
  export default Profile;
  