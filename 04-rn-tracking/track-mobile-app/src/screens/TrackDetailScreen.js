import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';

// const TrackDetailScreen = ({ navigation, route }) => {
//   const { _id } = route.params;
// const TrackDetailScreen = ({ navigation, route: {params: {_id}} }) => { //this is the way how we are destructuring in one line
const TrackDetailScreen = ({
  navigation,
  route: {
    params: { _id },
  },
}) => {
  const { state } = useContext(TrackContext);

  const track = state.find((tr) => tr._id === _id);
  const initialCoords = track.locations[0].coords;

  //Our Map.js component is not well suited for here to show only the track
  //Because, it shows current location (Circle), and it has strong coupling with LocationContext
  //But we need only Polyline. Because of that we are using another MapView here
  return (
    <>
      <Text style={{ fontSize: 36 }}>{track.name}</Text>
      {/* <Text>{_id}</Text> */}
      <MapView
        style={styles.map}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords,
        }}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default TrackDetailScreen;

//Here is the data format we are mapping over to extract coordinates
/*
{ 
  "_id"       :{"$oid":"5f91547590c83113842c32b4"},
  "name"      :"Hello",
  "userId"    :{"$oid":"5f8cafc8118daa1dc4a16fcc"},
  "__v"       :{"$numberInt":"0"}
  "locations" :[
    {
      "_id"       : {"$oid":"5f91547590c83113842c32b5"},
      "timestamp" : {"$numberDouble":"1603359850736"},
      "coords"    : {
                      "altitude":{"$numberInt":"0"},
                      "heading" :{"$numberInt":"90"},
                      "latitude":{"$numberDouble":"23.1154933"},
                      "longitude":{"$numberDouble":"-82.366215"},
                      "speed":{"$numberInt":"0"},
                      "accuracy":{"$numberInt":"5"}
                    }
    },
    {
      "_id"       : {"$oid":"5f91547590c83113842c32b6"},
      "timestamp" : {"$numberInt":"10000000"},
      "coords"    : {
                      "latitude":{"$numberDouble":"50.850792"},
                      "longitude":{"$numberDouble":"4.729906"},
                      "altitude":{"$numberInt":"5"},
                      "accuracy":{"$numberInt":"5"},
                      "heading":{"$numberInt":"0"},
                      "speed":{"$numberInt":"0"}
                    }
    },
    {
      "_id"       : {"$oid":"5f91547590c83113842c32b7"},
      "timestamp" : {"$numberInt":"10000000"},
      "coords"    : {
                      "latitude":{"$numberDouble":"50.850892"},
                      "longitude":{"$numberDouble":"4.7300059999999995"},
                      "altitude":{"$numberInt":"5"},
                      "accuracy":{"$numberInt":"5"},
                      "heading":{"$numberInt":"0"},
                      "speed":{"$numberInt":"0"}
                    }
    }
  ]
}
*/
