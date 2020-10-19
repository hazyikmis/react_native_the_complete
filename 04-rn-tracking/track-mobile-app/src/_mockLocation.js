import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = (increment) => {
  return {
    timestamp: 10000000,
    coords: {
      latitude: -122.0312186 + increment * tenMetersWithDegrees,
      longitude: 37.33233141 + increment * tenMetersWithDegrees,
      altitude: 5,
      altitudeAccuracy: 5,
      accuracy: 5,
      heading: 0,
      speed: 0,
    },
  };
};

let counter = 0;

//So whenever we import this file into our project, once every second
//we're going to emit an event directly into the location library and
//we're essentially faking out as though the user's location has changed
//in the real world. The watch idea right here is just little bit of
//background code.
//every second, latitude & longitude changes 10 meters

setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });

  counter++;
}, 1000);
