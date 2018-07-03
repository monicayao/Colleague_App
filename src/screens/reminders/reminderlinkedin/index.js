import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Left,
  Right,
  Body,
  Fab,
  Footer,
  FooterTab,
  DatePicker,
  Picker,
  Form,
  Item,
  Input,
  Label,
  Badge,
  View
} from "native-base";
import styles from "./styles";

export default class RemindersLinkedIn extends Component {
    constructor(props) {
      super(props);
      this.state = {
        active: 'true',
        selected1: "key1"
      };
    }
  
    onValueChange(value: string) {
      this.setState({ 
        selected1: value
      });
    }
    
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
              <Title style={{ color: "#fff" }} >LinkedIn Reminder</Title>
            </Body>
            <Right />
            </Header>
  
          <Text></Text>
            <Content>
            <Form>
                <Label>   Who would you like to contact?</Label>
                <Form>
                <Picker
                iosHeader="Select one"
                mode="dropdown"
                selectedValue={this.state.selected1}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Picker.Item label="Bobby" value="key0" />
                <Picker.Item label="Carl" value="key1" />
                <Picker.Item label="Dave" value="key2" />
                <Picker.Item label="Evan" value="key3" />
                <Picker.Item label="Fred" value="key4" />
              </Picker>
            </Form>
  
              <Item floatingLabel>
                <Label>What are the contents of the message?</Label>
                </Item>
            <DatePicker
              defaultDate={new Date(2018, 4, 4)}
              minimumDate={new Date(2018, 1, 1)}
              maximumDate={new Date(2100, 12, 31)}
              locale={"en"}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"default"}
              placeHolderText="Set your due date"
              />
  
            </Form>
          </Content>
    
        </Container>
        )
      };
    }
  



