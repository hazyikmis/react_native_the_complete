import React from 'react';
//import { Platform, SafeAreaView, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from '../screens/IndexScreen';
import ShowScreen from '../screens/ShowScreen';
import CreateScreen from '../screens/CreateScreen';

const StackMain = createStackNavigator();

const defaultStackNavScreenOptions = {
  //headerStyle: {},
  //headerTintColor:""
  //headerTitleStyle: {},
  //headerBackTitleStyle: {},
};

const MainNavigator = () => {
  return (
    <StackMain.Navigator
      screenOptions={defaultStackNavScreenOptions}
      initialRouteName="ScreenIndex"
    >
      <StackMain.Screen
        name="ScreenIndex"
        component={IndexScreen}
        options={{ headerTitle: 'Blog List' }}
      />
      <StackMain.Screen
        name="ScreenShow"
        component={ShowScreen}
        options={{ headerTitle: 'Show Blog' }}
      />
      <StackMain.Screen
        name="ScreenCreate"
        component={CreateScreen}
        options={{ headerTitle: 'Create New Blog' }}
      />
    </StackMain.Navigator>
  );
};

export default MainNavigator;
