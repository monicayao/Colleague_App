import React, { Component } from "react";
import { ListView } from 'react-native'
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

import datas from "./data";
import ListDetails from "./ListDetails";

class DynamicListView extends Component {
  
  constructor(props){ 
    super(props) 
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas,
    };
  }

  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }

  //_renderRow(rowData, sectionID, rowID) 

  render(){
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  return(         
      <List
        dataSource ={this.ds.cloneWithRows(this.state.listViewData)}
        renderRow={data =>
          <ListItem
            button
            onPress={() => this.props.navigation.navigate("ListDetails", 
            {name: data.name,
              org: data.org,
              email: data.email,
              phone: data.phone
            })}
          >
            <Left>
              <Text>
                {data.name}
              </Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          
        
        }
          renderRightHiddenRow={(data, secId, rowId, rowMap) =>
            <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
              <Icon active name="trash" />
            </Button>}
          rightOpenValue={-75}
      />

  );
  }
}


export default DynamicListView;