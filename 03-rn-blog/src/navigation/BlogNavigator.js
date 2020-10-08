import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from '../screens/IndexScreen';
import ShowScreen from '../screens/ShowScreen';
import CreateScreen from '../screens/CreateScreen';
import { Feather, EvilIcons } from '@expo/vector-icons';
import EditScreen from '../screens/EditScreen';

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
        // options={{
        //   headerTitle: 'Blog List',
        //   headerRight: () => (
        //     <TouchableOpacity>
        //       <Feather name="plus" size={24} color="black" />
        //     </TouchableOpacity>
        //   ),
        // }}
        options={({ navigation }) => ({
          headerTitle: 'Blog List',
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('ScreenCreate')}
            >
              <Feather name="plus" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
      <StackMain.Screen
        name="ScreenShow"
        component={ShowScreen}
        //options={{ headerTitle: 'Show Blog' }}
        options={({ navigation, route }) => ({
          headerTitle: 'Show Blog',
          headerRight: () => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ScreenEdit', { id: route.params?.id })
              }
            >
              <EvilIcons name="pencil" size={35} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
      <StackMain.Screen
        name="ScreenCreate"
        component={CreateScreen}
        options={{ headerTitle: 'Create New Blog' }}
      />
      <StackMain.Screen
        name="ScreenEdit"
        component={EditScreen}
        options={{ headerTitle: 'Edit Blog' }}
      />
    </StackMain.Navigator>
  );
};

export default MainNavigator;
