import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import Styles from '../Styles/styles'
export default class Cell extends React.Component {
  render() {
    return (
      <View>
        <View style={Styles.cellviewStyle}>
          <Image
            source={{
              uri:
                'https://tse3.mm.bing.net/th?id=OIP.0KIQ-UTdpUIr8kUWz5kVYgHaE8&pid=Api',
            }}
            style={Styles.cellimgStyle}
          />
          <View>
            <Text style={Styles.celltextStyle}>Devil of Diamonds</Text>
            <Text style={Styles.celltextStyle2}>The Audible Rupture</Text>
          </View>
          <Text style={Styles.celltextStyle2}>4:10</Text>
        </View>
        <Button
          title="Go To PhotoLoot"
          onPress={() => this.props.navigation.navigate('PhotoLoot')}
        />
      </View>
    );
  }
}
// const styles = StyleSheet.create({
//   viewStyle: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     paddingTop: 50,
    
//   },
//   imgStyle: {
//     width: 80,
//     height: 80,
//   },
//   textStyle: {
//     fontWeight: 'bold',
//     fontSize: 15,
//   },
//   textStyle2: {
//     color: 'gray',
//   },
// });
