import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = (props) => {
  // console.log(props);
  const { title, imageSource, score } = props;
  return (
    <View style={styles.container}>
      <Image source={imageSource} />
      <Text>Beautiful view of {title}</Text>
      <Text>Score: {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flexDirection: 'row',
    //flex: 1,
    width: '100%',
    //height: 90,
    backgroundColor: '#f7287b',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ImageDetail;
