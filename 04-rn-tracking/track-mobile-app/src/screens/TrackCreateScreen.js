import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Map from '../components/Map';

const TrackCreateScreen = (props) => {
  const {} = props;
  return (
    <SafeAreaView>
      <Text h2>Create a Track</Text>
      <Map />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
