import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import I18n from '../translations/I18n';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import { GraphRequest, GraphRequestManager } from 'react-native-fbsdk';

var FBLoginButton = require('./FBLoginButton');

export default class GoogleSigning extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: true,
      signedOut: false,
      modalVisible: false,
      image:'',
      user: {
        email: '',
        id: '',
        givenName: '',
        familyName: '',
        photo: '', // url
        name: '', // full name
      },
    };
  }
  componentDidMount() {
    GoogleSignin.configure();
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      //   this.setState({userInfo});
      this.getCurrentUserInfo();
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      this.setState({
        user: userInfo.user,
        signedIn: false,
        signedOut: true,
      });
      console.log('User Info', userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // user has not signed in yet
      } else {
        // some other error
      }
    }
  };
  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.setState({user: '', signedIn: true, signedOut: false}); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };
  renderText(text) {
    return <Text style={Styles.txtStyle}>{text}</Text>;
  }
  

  render() {
    return (
      <View style={Styles.mainView}>
        {this.state.signedIn && (
          <View>
            <GoogleSigninButton
              style={{width: 192, height: 48}}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={this.signIn}
              disabled={this.state.isSigninInProgress}
            />
            <FBLoginButton 
            />
          </View>
        )}

        {/* <TouchableOpacity
          style={Styles.buttonViewStyle}
          onPress={this.getCurrentUserInfo}>
          {this.renderText(I18n.t('getInfo'))}
        </TouchableOpacity> */}
        {this.state.signedOut && (
          <TouchableOpacity
            style={Styles.buttonViewStyle}
            onPress={this.signOut}>
            {this.renderText(I18n.t('SignOut'))}
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('details')}>
          <Text>Open Details</Text>
        </TouchableOpacity>
        <Image style={Styles.imgStyle} source={{uri: this.state.user.photo}} />
        {this.renderText(this.state.user.name)}
        {this.renderText(this.state.user.givenName)}
        {this.renderText(this.state.user.familyName)}
        {this.renderText(this.state.user.email)}
        <Image
        source={{uri:this.state.image}}/>
      </View>
    );
  }
}
const responseCallback = ((error, result) => {
    if (error) {
          response.ok = false
          response.error = error
          return(response)
    } else {
          response.ok = true
          response.json = result
          return(response)
    }
})

// the famous params object...
const Styles = StyleSheet.create({
  mainView: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
  txtStyle: {
    fontSize: 18,
  },
  imgStyle: {
    height: 100,
    marginTop: 50,
    borderRadius: 50,
    width: 100,
  },
  buttonViewStyle: {
    backgroundColor: '#FEE7A5',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: '5%',
    margin: 10,
    borderRadius: 10,
  },
});
