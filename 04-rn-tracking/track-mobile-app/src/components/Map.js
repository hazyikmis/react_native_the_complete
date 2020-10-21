import React, { useContext } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
  // const { state } = useContext(LocationContext);
  // console.log(state);
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);

  // console.log(state);

  //probably, at the beginning there is no currentLocation, then show activity indicator
  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 100 }} />;
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        // latitude: 37.33233,
        // longitude: -122.03121,
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      //region is optional parameter, to recenter the map, take the coordinates below as a center point of the map
      // region={{
      //   ...currentLocation.coords,
      //   latitudeDelta: 0.01,
      //   longitudeDelta: 0.01,
      // }}
    >
      {/* <Polyline coordinates={points} /> */}
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158,158,255,1.0)"
        fillColor="rgba(158,158,255,0.3)"
      />
      <Polyline coordinates={locations.map((loc) => loc.coords)} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
