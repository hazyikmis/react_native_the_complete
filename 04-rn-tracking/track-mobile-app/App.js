import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen, {
  navigationOptions as SignupScreenNavigationOptions,
} from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';

import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';
import { setNavigator } from './src/navigationRef';
import SplashScreen from './src/screens/SplashScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { Text } from 'react-native';

const stackNavMain = createStackNavigator();

const stackNavLogin = createStackNavigator();
const loginFlow = () => {
  return (
    <stackNavLogin.Navigator screenOptions={{ headerShown: false }}>
      <stackNavLogin.Screen
        name="Signup"
        component={SignupScreen}
        //options={SignupScreenNavigationOptions}
      />
      <stackNavLogin.Screen name="Signin" component={SigninScreen} />
    </stackNavLogin.Navigator>
  );
};

const stackNavTracks = createStackNavigator();
const trackListFlow = () => {
  return (
    <stackNavTracks.Navigator>
      <stackNavTracks.Screen
        name="TrackList"
        component={TrackListScreen}
        options={{ title: 'Tracks' }}
      />
      <stackNavTracks.Screen name="TrackDetail" component={TrackDetailScreen} />
    </stackNavTracks.Navigator>
  );
};

const bottomTabNavMain = createBottomTabNavigator();
const mainFlow = () => {
  return (
    <bottomTabNavMain.Navigator>
      <bottomTabNavMain.Screen
        name="trackListFlow"
        component={trackListFlow}
        options={{
          // tabBarLabel: 'Tracks',
          tabBarLabel: () => <Text style={{ fontSize: 12 }}>Tracks</Text>,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="format-list-bulleted"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <bottomTabNavMain.Screen
        name="TrackCreate"
        component={TrackCreateScreen}
        options={{
          tabBarLabel: () => <Text style={{ fontSize: 12 }}>Add Track</Text>,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="add-to-list" color={color} size={size} />
          ),
        }}
      />
      <bottomTabNavMain.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: () => <Text style={{ fontSize: 12 }}>Account</Text>,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </bottomTabNavMain.Navigator>
  );
};

// export default function App() {
// function App() {
// const App = () => {return (<Nav...></Nav...>)}
// const App = () => (
//   <NavigationContainer>
//     <stackNavMain.Navigator screenOptions={{ headerShown: false }}>
//       <stackNavMain.Screen name="loginFlow" component={loginFlow} />
//       <stackNavMain.Screen name="mainFlow" component={mainFlow} />
//     </stackNavMain.Navigator>
//   </NavigationContainer>
// );

const App = React.forwardRef((props, ref) => (
  <SafeAreaProvider>
    <NavigationContainer ref={ref}>
      <stackNavMain.Navigator screenOptions={{ headerShown: false }}>
        <stackNavMain.Screen name="splash" component={SplashScreen} />
        <stackNavMain.Screen name="loginFlow" component={loginFlow} />
        <stackNavMain.Screen name="mainFlow" component={mainFlow} />
      </stackNavMain.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
));

//App is actually created by NavigationContainer (or equals to)

export default () => {
  const ref = React.createRef();
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App
            ref={(navigator) => {
              setNavigator(navigator);
            }}
          />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};
