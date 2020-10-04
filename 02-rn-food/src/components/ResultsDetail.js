import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Stars from './Stars';

const ResultsDetail = (props) => {
  const { result } = props;
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <View style={styles.textInfo}>
        <Stars numberOfStars={result.rating} />
        <Text>
          {'  '}
          {result.rating} Stars, {result.review_count} Reviews
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 6,
    marginBottom: 5,
  },
  nameStyle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  textInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ResultsDetail;
