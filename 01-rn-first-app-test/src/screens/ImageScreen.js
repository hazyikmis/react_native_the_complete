import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = (props) => {
  const {} = props;
  return (
    <View style={styles.container}>
      <Text>Image Screen</Text>
      <ImageDetail
        title="Forest"
        imageSource={require('../../assets/forest.jpg')}
        score="3"
      />
      <ImageDetail
        title="Beach"
        imageSource={require('../../assets/beach.jpg')}
        score="7"
      />
      <ImageDetail
        title="Mountain"
        imageSource={require('../../assets/mountain.jpg')}
        score="9"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ImageScreen;
