import React from 'react';
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import Styles from '../Styles/styles';
import AsyncStorage from '@react-native-community/async-storage';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {images} from '../Images/imagePath';
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      number: '',
      city: '',
      state: '',
    };
  }
  onSubmitEditing = () => {
    console.warn('on Submit Editing');
  };

  storeData = () => {
    const {firstName, lastName,email,number,city,state} = this.state;
    const fName = ['fName', firstName],
      lName = ['lName', lastName],
      mail = ['email', email],
      Mobilenumber = ['number', number],
      cities = ['city', city],
      states = ['state', state];
    AsyncStorage.multiSet([fName, lName, mail, Mobilenumber, cities, states]).then(() =>
      this.props.navigation.navigate('DashBoard'),
    );
  };

  render() {
    return (
      <KeyboardAwareScrollView contentContainerStyle={Styles.loginViewStyle}>
        <Image source={images.loginImagePath} />
        <View style={{marginRight: 150}}>
          <Text style={Styles.splashTxtStyle}>LogIn</Text>
          <Text style={{fontWeight: '100', marginTop: 10}}>
            Enter your details to continue
          </Text>
        </View>
        <TextInput
          value={this.state.firstName}
          placeholder="First Name"
          returnKeyType="next"
          style={Styles.inputStyle}
          onChangeText={val => {
            this.setState({
              firstName: val,
            });
          }}
          onSubmitEditing={() => {
            this.lastNameInput.focus();
          }}
        />

        <TextInput
          value={this.state.lastName}
          placeholder="last Name"
          ref={input => {
            this.lastNameInput = input;
          }}
          returnKeyType="next"
          style={Styles.inputStyle}
          onChangeText={val => {
            this.setState({
              lastName: val,
            });
          }}
          onSubmitEditing={() => {
            this.emailInput.focus();
          }}
        />
        <TextInput
          placeholder="Email"
          returnKeyType="next"
          ref={input => {
            this.emailInput = input;
          }}
          style={Styles.inputStyle}
          value={this.state.email}
          onChangeText={val => {
            this.setState({
              email: val,
            });
          }}
          onSubmitEditing={() => {
            this.numberInput.focus();
          }}
        />
        <TextInput
          placeholder="Mobile Number"
          returnKeyType="next"
          ref={input => {
            this.numberInput = input;
          }}
          style={Styles.inputStyle}
          value={this.state.number}
          onChangeText={val => {
            this.setState({
              number: val,
            });
          }}
          onSubmitEditing={() => {
            this.cityInput.focus();
          }}
        />
        <TextInput
          placeholder="City"
          returnKeyType="next"
          ref={input => {
            this.cityInput = input;
          }}
          style={Styles.inputStyle}
          value={this.state.city}
          onChangeText={val => {
            this.setState({
              city: val,
            });
          }}
          onSubmitEditing={() => {
            this.stateInput.focus();
          }}
        />
        <TextInput
          placeholder="State"
          returnKeyType="done"
          ref={input => {
            this.stateInput = input;
          }}
          style={Styles.inputStyle}
          value={this.state.state}
          onChangeText={val => {
            this.setState({
              state: val,
            });
          }}
          onSubmitEditing={this.onSubmitEditing}
        />
        <TouchableOpacity
          onPress={this.storeData}
          style={Styles.buttonViewStyle}>
          <Text style={Styles.buttontxtStyle}>Login</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    );
  }
}
