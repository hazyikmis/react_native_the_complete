import React from 'react';
import { StatusBar } from 'expo-status-bar';
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
      <stackNavTracks.Screen name="TrackList" component={TrackListScreen} />
      <stackNavTracks.Screen name="TrackDetail" component={TrackDetailScreen} />
    </stackNavTracks.Navigator>
  );
};

const bottomTabNavMain = createBottomTabNavigator();
const mainFlow = () => {
  return (
    <bottomTabNavMain.Navigator>
      <bottomTabNavMain.Screen name="trackListFlow" component={trackListFlow} />
      <bottomTabNavMain.Screen
        name="TrackCreate"
        component={TrackCreateScreen}
      />
      <bottomTabNavMain.Screen name="Account" component={AccountScreen} />
    </bottomTabNavMain.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <stackNavMain.Navigator screenOptions={{ headerShown: false }}>
        <stackNavMain.Screen name="loginFlow" component={loginFlow} />
        <stackNavMain.Screen name="mainFlow" component={mainFlow} />
      </stackNavMain.Navigator>
    </NavigationContainer>
  );
}
