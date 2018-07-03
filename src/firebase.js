import * as firebase from 'firebase';


  const config = {
    apiKey: "AIzaSyBiHf0U_ABbOe33EBZJAeVyctbkiRc_gLc",
    authDomain: "colleague-6bedd.firebaseapp.com",
    databaseURL: "https://colleague-6bedd.firebaseio.com",
    projectId: "colleague-6bedd",
    storageBucket: "colleague-6bedd.appspot.com",
    messagingSenderId: "634150701358"
  };

export default class Firebase{
  static auth;
  static init(){
    firebase.initializeApp(config);
    Firebase.auth = firebase.auth();
  }
}

