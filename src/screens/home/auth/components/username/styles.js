const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  logoContainer: {
    flex: 1,
    marginBottom: 30
  },
  logo: {
    flex: 1,
    position: "absolute",
    left: Platform.OS === "android" ? 10 : 20,
    top: Platform.OS === "android" ? 35 : 60,
    width: 100,
    height: 100
  },
  text: {
    flex: 1,
    color: "#D8D8D8",
    position: "absolute",
    left: Platform.OS === "android" ? 80 : 130,
    top: Platform.OS === "android" ? -140 : -170,
    fontSize: 17,
    fontFamily: 'Arial',
  },
  titletext: {
    flex: 1,
    position: "absolute",
    left: Platform.OS === "android" ? 170 : 190,
    top: Platform.OS === "android" ? -250 : -220,
    color: 'white',
    fontSize: 22,
    fontFamily: 'Arial',
  }
};
