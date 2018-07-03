import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  ActionSheet,
  Input,
  Form,
  Item,
  DatePicker,
  View,
  Left,
  Right,
  Body
} from "native-base";

import styles from "./styles";


class ListDetails extends Component {
  
  constructor(props){
    super(props)
  }
  
  render() {
    const { navigation } = this.props

    const name = navigation.getParam("name", "No Name Entered")
    const org = navigation.getParam("org", "No Organization Entered")
    const email = navigation.getParam("email", "No Email Entered")
    const phone = navigation.getParam("phone", "No Number Entered")
    
    var BUTTONS = ["Call " + name, "Cancel"];
    var BUTTONS2 = ["Email " + name, "Cancel"];
    var CANCEL_INDEX = 4;
    return (
      <Container style={styles.container}>
        <Header hasSegment
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
                <Title style={{ color: "#FFF" }}> {name} </Title>
                <Text> {org} </Text>
            </Body>
            <Right>
                <Button transparent>
                    <Icon name="share" style={{ color: "#FFF" }}/>
                </Button>
            </Right>
        </Header>

        <Content padder>
            <Button style={{ backgroundColor: "#B08CB2" }}
            onPress={() =>
            ActionSheet.show(
                {
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                title: "Select an option"
                },
                buttonIndex => {
                    this.setState({ clicked: BUTTONS[buttonIndex] });
                    }
                )}
            >
            <Text>Phone</Text>
            <Text> {phone} </Text>
            </Button>
          <Text></Text>
          <Button style={{ backgroundColor: "#B08CB2" }}
            onPress={() =>
              ActionSheet.show(
                {
                  options: BUTTONS2,
                  cancelButtonIndex: CANCEL_INDEX,
                  title: "Select an option"
                },
                buttonIndex => {
                  this.setState({ clicked: BUTTONS[buttonIndex] });
                }
              )}
          >
            <Text>Email</Text>
            <Text> {email} </Text>
          </Button>
          <Text></Text>
          <Form>
            <Item regular>
              <Input placeholder="Additional Notes" />
            </Item>
          </Form>
        <Text></Text>
        <Text>Set Reminder</Text><DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
          />
          </Content>
      </Container>
    );
  }
}

export default ListDetails;
