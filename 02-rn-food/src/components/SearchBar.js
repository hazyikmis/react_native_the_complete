import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  //const {term, onTermChange} = props;
  return (
    <View style={styles.container}>
      <Feather name="search" size={36} color="black" style={styles.iconStyle} />
      <TextInput
        style={styles.textInputStyle}
        placeholder="Search"
        value={term}
        //onChangeText={(newTerm) => onTermChange(newTerm)}
        onChangeText={onTermChange}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    height: 50,
    backgroundColor: '#f0eeee',
    marginHorizontal: 10,
    flexDirection: 'row',
    //alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  textInputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    alignSelf: 'center',
    //fontSize: 36,
    //color: 'black',
    marginHorizontal: 15,
  },
});

export default SearchBar;
