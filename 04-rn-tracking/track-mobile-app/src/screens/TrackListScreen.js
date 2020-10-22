import React, { useState, useCallback, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { useFocusEffect } from '@react-navigation/native';
import { Context as TrackContext } from '../context/TrackContext';

const TrackListScreen = ({ navigation }) => {
  const [isFocused, setIsFocused] = useState(false);

  const { state, fetchTracks } = useContext(TrackContext);

  //console.log(state);

  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused
      console.log('focused');
      fetchTracks();
      setIsFocused(true);
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        console.log('un-focused');
        setIsFocused(false);
      };
    }, [])
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <ListItem
              onPress={() =>
                navigation.navigate('TrackDetail', { _id: item._id })
              }
            >
              <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Subtitle>
                  {item.locations.length} locations tracked
                </ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TrackListScreen;
