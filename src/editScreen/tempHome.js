import React from 'react';
import {View, Text, StyleSheet,Image, TouchableOpacity} from 'react-native';

export default class TempHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      First_Name: 'First Name',
      Last_Name: 'Last Name',
      imagePath:'https://tse3.mm.bing.net/th?id=OIP.0KIQ-UTdpUIr8kUWz5kVYgHaE8&pid=Api'
    };
  }
  update = (first, last,imagePath) => {
    this.setState({
      First_Name: first,
      Last_Name: last,
      imagePath: imagePath
    });
  };
  render() {
    return (
      <View style={Styles.viewStyle}>
        <Text style={Styles.txtStyle}>{this.state.First_Name}</Text>
        <Text style={Styles.txtStyle}>{this.state.Last_Name}</Text>
        <Image style={Styles.imgStyle}
        source={{uri:this.state.imagePath}}/>
        <TouchableOpacity
          style={Styles.buttonStyle}
          onPress={() =>
            this.props.navigation.navigate('EditScreen', {
              firstName: this.state.First_Name,
              update: this.update,
              lastName: this.state.Last_Name,
            })
          }>
          <Text style={Styles.txtStyle}>Edit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtStyle: {
    fontSize: 20,
    margin: 20,
  },
  buttonStyle: {
    backgroundColor: 'powderblue',
    borderRadius: 10,
    marginTop:20
  },
  imgStyle:{
      width:300,
      height:200
  }
});
