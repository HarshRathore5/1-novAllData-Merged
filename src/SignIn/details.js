import React, { Component } from 'react';
import { View, Text,TextInput,TouchableOpacity } from 'react-native';
import Styles from '../Styles/styles';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  submit=()=>{
      this.props.navigation.goBack()
  }
  
  render() {
    return (
      <View style={Styles.mainViewStyle}>
        <TextInput 
        style={Styles.inputStyle}
        keyboardType="number-pad"
        placeholder="Enter Mobile Number">
            
        </TextInput>
        <TouchableOpacity 
        onPress={()=>this.submit()}
        style={Styles.buttonViewStyle}>
            <Text style={Styles.buttontxtStyle}>Submit</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}
