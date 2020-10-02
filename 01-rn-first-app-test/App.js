import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import SquareScreenBetter from './src/screens/SquareScreenBetter';
import SquareScreenBetterComCon from './src/screens/SquareScreenBetterComCon';
import CounterScreenBetter from './src/screens/CounterScreenBetter';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    CounterBetter: CounterScreenBetter,
    Color: ColorScreen,
    Square: SquareScreen,
    SquareBetter: SquareScreenBetter,
    SquareBetterCC: SquareScreenBetterComCon,
    Text: TextScreen,
    Box: BoxScreen,
  },
  {
    // initialRouteName: "Home",
    // initialRouteName: 'Components',
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
