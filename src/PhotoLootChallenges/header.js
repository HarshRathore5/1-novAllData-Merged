import React from 'react';
import {View,Alert, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

export const Header = () => {
  return (
    <View style={styles.viewStyle}>
      <TouchableOpacity
        style={styles.backStyle}
        onPress={() => Alert.alert('Back Button Pressed')}>
        <Image source={require('../assets/footerImages/backButton.png')} />
      </TouchableOpacity>
      <Text style={styles.textStyle}>Hall of Fame</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    backgroundColor: '#FB9701',
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  textStyle: {
    fontWeight: 'bold',
    color: 'ghostwhite',
    fontSize: 24,
    marginTop: 10,
  },
  viewRatingStyle: {
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  backStyle: {
    width: 30,
    height: 30,
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 10,
    top: 10,
    left: 5,
    position: 'absolute',
    marginLeft: 20,
  },
});
