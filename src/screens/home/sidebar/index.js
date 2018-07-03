import React, { Component } from "react";
import { View, Text, Button, Image } from "react-native";
import {
  Content,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from "native-base";
import styles from "./style";

const drawerCover = require("./back.png");
const drawerImage = require("./propic.png");
const datas = [
  {
    name: "Your Profile",
    route: "Profile",
    icon: "person"
  },
  {
    name: "Your Wallet",
    route: "Wallet",
    icon: "images"
  },
  {
    name: "Your Reminders",
    route: "Reminders",
    icon: "alarm"
  }
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#B08CB2", top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover} />
          <Image square style={styles.drawerImage} source={drawerImage} />
          <List
            dataArray={
              datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#fff", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
              </ListItem>}
          />
          
        </Content>
        <Button title="Logout" onPress={this.props.logoutCallback}/>
      </Container>
    );
  }
}

export default SideBar;
