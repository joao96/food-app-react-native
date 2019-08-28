import {
  createStackNavigator,
  creeateAppContainer,
  createAppContainer
} from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search"
    }
  }
);

export default createAppContainer(navigator);
// when the app starts up, anything that we export from this file
// it's going to be taken by React Native and automatically shown
// in the screen of the device
