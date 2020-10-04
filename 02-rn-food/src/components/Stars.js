import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
/*
<Ionicons name="md-star" size={24} color="black" />
<Ionicons name="md-star-half" size={24} color="black" />
*/

const Stars = (props) => {
  const { numberOfStars } = props;
  const baseNumberOfStars = Math.floor(numberOfStars);

  const drawFullStars = (numOfStars) => {
    let fullStars = [];
    for (let i = 0; i < numOfStars; i++) {
      fullStars.push(<Ionicons style={styles.star} name="md-star" key={i} />);
    }
    return fullStars;
  };

  const drawHalfStar = () => {
    return (
      <Ionicons style={styles.star} name="md-star-half" key={numberOfStars} />
    );
  };

  return (
    <View style={styles.container}>
      {drawFullStars(baseNumberOfStars)}
      {baseNumberOfStars < numberOfStars ? drawHalfStar() : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  star: {
    fontSize: 16,
    color: 'orange',
  },
});

export default Stars;
