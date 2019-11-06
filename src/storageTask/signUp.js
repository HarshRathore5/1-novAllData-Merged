import React from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import Styles from '../Styles/styles';
import AsyncStorage from '@react-native-community/async-storage';
import I18n from '../translations/I18n';
export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: '',
    };
  }
  saveData = () => {
    AsyncStorage.setItem('emailAdd', this.state.emailAddress);
   
  };

  render() {
    return (
      <View style={Styles.loginViewStyle}>
        <TextInput
          value={this.state.emailAddress}
          placeholder="Email"
          onChangeText={val => {
            this.setState({
              emailAddress: val,
            });
          }}
          returnKeyType="done"
          onSubmitEditing={this.saveData}
          style={Styles.inputStyle}
        />
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('DashBoard');
          }}
          style={Styles.buttonViewStyle}>
          <Text style={Styles.buttontxtStyle}>SignUp</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Login');
          }}
          style={Styles.buttonViewStyle}>
          <Text style={Styles.buttontxtStyle}>{I18n.t('goToLogIn')}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
