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

import datas from "./data";

import CardsForView from "./CardsForView";

class CardView extends Component {
  
  renderCards(data){
    return <CardsForView key ={data.id}
    name = {data.name}
    org = {data.org} />
  }

  render() { 
    return (
      <View>
      {datas.map(data => this.renderCards(data))}
      </View>
);
}
}



export default CardView;