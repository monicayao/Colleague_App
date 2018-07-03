import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import GridView from 'react-native-super-grid';
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

import CardView from "./CardView";
import DynamicListView from "./DynamicListView";
import SortedView from "./SortedView";

import datas from "./data";

class Wallet extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      seg: 2,
    };
  }

  
  render() {
  
    return (

        <Container>
          <View style={{ flex: 1 }}>
          <Header hasSegment

            style={{ backgroundColor: "#B08CB2" }}
            androidStatusBarColor="#dc2015"
            iosBarStyle="light-content"
          >
            <Left>
              <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                <Icon name="menu" style={{ color: "#FFF" }} />
              </Button>
            </Left>
            <Body>
              <Title style={{ color: "#FFF" }}>Your Wallet</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name="search" style={{ color: "#FFF" }}/>
              </Button>
            </Right>
          </Header>
          <Segment>
            <Button
              first
              active={this.state.seg === 1 ? true : false}
              onPress={() => this.setState({ seg: 1 })}
              style={{ backgroundColor: "#B08CB2" }}
            >
              <Text>Card View</Text>
            </Button>
            <Button
              style={{ backgroundColor: "#B08CB2" }}
              active={this.state.seg === 2 ? true : false}
              onPress={() => this.setState({ seg: 2 })}
            >
              <Text>List View</Text>
            </Button>

            <Button
              style={{ backgroundColor: "#B08CB2" }}
              last
              active={this.state.seg === 3 ? true : false}
              onPress={() => this.setState({ seg: 3 })}
            >
              <Text>Sorted View</Text>
            </Button>
          </Segment>

          <Content padder>
            {this.state.seg === 1 &&
            
            < CardView />
          
            }

            {this.state.seg === 2 && 
              
             <DynamicListView navigation = {this.props.navigation}/>
            }
    
          {this.state.seg === 3 && 

            < SortedView navigation = {this.props.navigation}/>
          }

          </Content>

          <Fab
              active={this.state.active}
              direction="up"
              containerStyle={{ }}
              style={{ backgroundColor: "#B08CB2" }}
              position="bottomRight"
              onPress={() => this.setState({ active: !this.state.active })}>
              <Icon name="add" />
              <Button style={{ backgroundColor: '#DD5144' }}>
                <Icon name="folder" />
              </Button>
              <Button style={{ backgroundColor: '#34A34F' }}>
                <Icon name="images" />
              </Button>
              <Button style={{ backgroundColor: '#3B5998' }}
              onPress={() => this.props.navigation.navigate("CameraPage")}>
                <Icon name="camera" />
              </Button>
              <Button style={{ backgroundColor: '#778899' }}
              onPress={() => this.props.navigation.navigate("NewContact")}>
                <Icon name="person-add" />
              </Button>
              
            </Fab>
            </View>
        </Container> //I have no way to make a different fab for each different page sadly 
      
    );
  }
}



export default Wallet;

