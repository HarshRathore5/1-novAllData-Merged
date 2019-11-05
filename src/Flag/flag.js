import React from 'react';
import {View,StyleSheet} from 'react-native';

export default class Flag extends React.Component {
  render() {
    return (
      <View style={Styles.view} >
        <View style={Styles.view1}></View>

        <View style={Styles.view2}>
            <View style={Styles.view4}>
                <View style = {Styles.view5}></View>
            </View>
        </View>
        <View style={Styles.view3}></View>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
    view:{
        flex:1,

    },
    view1:{
        flex:1/3,
        backgroundColor:'red',
    },
    view2:{
        flex:1/3,
        backgroundColor:'yellow',
    },
    view3:{
        flex:1/3,
        backgroundColor:'blue',
    },
    view4:{
        flex:0.6,
        backgroundColor:'green'
    },
    view5:{
        flex:0.4,
        backgroundColor:'yellow'
    }
})