import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  ListItem,
  CheckBox,
  Text,
  Left,
  Right,
  Body,
  TextInput,
  Fab,
  Footer,
  FooterTab,
  Badge,
  View
} from "native-base";
import styles from "./styles";

export default class Reminders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'true'
    };
  }
  render() {
    return (  
      <Container style={styles.container}>
        <Header
        style={{ backgroundColor: "#CDB5CD", }} >
          <Left>
            <Button
                    transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon style={{ color: "#fff" }} name="menu" />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "#fff" }} >Reminders</Title>
          </Body>
          <Right />
          </Header>
    
         
          <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>Daily Stand Up</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} />
            <Body>
              <Text>Discussion with Client</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false}/>
            <Body>
              <Text>Finish list Screen</Text>
            </Body>
          </ListItem>
        
        <Content padder />
       
        <View style={{ flex: 1 }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: "#B08CB2" }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="add" />
            <Button style={{ backgroundColor: '#34A34F' }}
            onPress={() => this.props.navigation.navigate("RemindersCall")}>>
              <Icon name="call" />
            </Button>
            <Button style={{ backgroundColor: '#FFFF99' }}
            onPress={() => this.props.navigation.navigate("RemindersGeneral")}>
              <Icon name="ios-clipboard-outline" />
            </Button>
            <Button style={{ backgroundColor: '#DD5144' }}
            onPress={() => this.props.navigation.navigate("RemindersEmail")}>
              <Icon name="mail" />
            </Button>
            <Button style={{ backgroundColor: '#0077B5' }}
            onPress={() => this.props.navigation.navigate("RemindersLinkedin")}>
              <Icon name="logo-linkedin" />
            </Button>                                                                                                                                                                                                                                                                                                                                              
          </Fab>
        </View> 

      </Container>)
    };
  }




