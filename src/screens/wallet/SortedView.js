import React, { Component } from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
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

const datas = [
    {
      route: "DefaultAlbum",
      text: "Default"
    },
    {
      route: "HMCAlbum",
      text: "Harvey Mudd College"
    },

  ];

class SortedView extends Component {
    
    constructor(props){
      super(props)
    }
  

    render() {return (
              <GridView
                  itemDimension={130}
                  items={datas}
                  style={gridStyles.gridView}
                  renderItem={data => (
                    <View style={[gridStyles.itemContainer, { backgroundColor: "#CDB5CD" }]}>
                      <TouchableOpacity 
                          button transparent
                          onPress={() => this.props.navigation.navigate(data.route)}> 
                          <Icon style={gridStyles.buttonContainer} name = "folder"></Icon>
                      </TouchableOpacity>
                      <Text style={gridStyles.itemName}>{data.text}</Text>
                    </View> 
                  )}
                />              
          );

  }
      
    }


const gridStyles = StyleSheet.create({
    gridView: {
      paddingTop: 25,
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 10,
      height: 150,
    },
    itemName: {
      fontSize: 16,
      color: '#000000',
      fontWeight: '600',
    },
    buttonContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 0,
      height: 120,
    }
  });

export default SortedView;