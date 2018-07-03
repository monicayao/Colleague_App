import React from 'react';
import { Root, Container } from 'native-base';
import { StackNavigator, DrawerNavigator  } from 'react-navigation';
import Home from './screens/home/';

import SideBar from "./screens/home/sidebar";

import Profile from "./screens/profile/";
import Wallet from "./screens/wallet/";
import Reminders from "./screens/reminders/";

import settings from "./screens/profile/settings";
import RemindersCall from "./screens/reminders/remindercall/";
import RemindersEmail from "./screens/reminders/reminderemail/";
import RemindersLinkedin from "./screens/reminders/reminderlinkedin/";
import RemindersGeneral from "./screens/reminders/remindergeneral/";

import NewContact from "./screens/wallet/NewContact";
import ListDetails from "./screens/wallet/ListDetails";
import CardsForView from "./screens/wallet/CardsForView";
import CardView from "./screens/wallet/CardView";
import DynamicListView from "./screens/wallet/DynamicListView";
import SortedView from "./screens/wallet/SortedView";
import DefaultAlbum from "./screens/wallet/DefaultAlbum";
import HMCAlbum from "./screens/wallet/HMCAlbum";

import CameraPage from "./screens/wallet/camera/";

const Drawer = DrawerNavigator(
  {
    Profile: { screen: Profile },
    Wallet: { screen: Wallet },
    Reminders: { screen: Reminders },
  },
  {
    initialRouteName: "Profile",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = StackNavigator(
  {
    Home: {
      screen: Home,
    },

    Drawer: { screen: Drawer },

    settings: { screen: settings },

    NewContact: { screen: NewContact },
    ListDetails: { screen: ListDetails },
    CardsForView: { screen: CardsForView },
    CardView: { screen: CardView },
    DynamicListView: { screen: DynamicListView },
    SortedView: { screen: SortedView },
    DefaultAlbum: { screen: DefaultAlbum },
    HMCAlbum: { screen: HMCAlbum },

    RemindersCall: { screen: RemindersCall },
    RemindersEmail: { screen: RemindersEmail },
    RemindersLinkedin: { screen: RemindersLinkedin },
    RemindersGeneral: { screen: RemindersGeneral },

    CameraPage: { screen: CameraPage },

  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

export default class App extends React.Component {
  render () {
    return (
      <Root>
        <AppNavigator />
      </Root>
    )
  }
}
