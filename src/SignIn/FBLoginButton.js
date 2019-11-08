import React, {Component} from 'react';
import {View,Image} from 'react-native';
import {LoginButton, AccessToken} from 'react-native-fbsdk';
import {GraphRequest, GraphRequestManager} from 'react-native-fbsdk';
import Styles from '../Styles/styles'

export default class FBLoginButton extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      photo:''
      // user:{
      //     name:'',
      //     id:'',
      //     user_friends:'',
      //     email:'',
      //     username:'',
      //     loading:'',
      //     loggedIn:'',
      //     avatar:''
      // }
    };
  }

  render() {
    return (
      <View>
        <LoginButton
          publishPermissions={['email']}
          onLoginFinished={(error, result) => {
            if (error) {
              alert('Login failed with error: ' + error.message);
            } else if (result.isCancelled) {
              alert('Login was cancelled');
            } else {
              alert(
                'Login was successful with permissions: ' +
                  result.grantedPermissions,
              );
              AccessToken.getCurrentAccessToken().then(data => {
                let accessToken = data.accessToken;
                const responseInfoCallback = (error, result) => {
                  if (error) {
                    console.log(error);
                    alert('Error fetching data: ' + error.toString());
                  } else {
                    console.log(result);
                    
                        this.setState({
                            photo:result.picture.data.url
                        })
                 
                    alert('Success fetching data: ' + result.toString());
                  }
                };

                const infoRequest = new GraphRequest(
                  '/me',
                  {
                    accessToken: accessToken,
                    parameters: {
                      fields: {
                        string:
                          'email,name,first_name,middle_name,last_name,gender,picture.type(large)',
                      },
                    },
                  },
                  responseInfoCallback,
                );

                // Start the graph request.
                new GraphRequestManager().addRequest(infoRequest).start();
              });
            }
          }}
          onLogoutFinished={() => alert('User logged out')}
        />
        {
            console.warn(this.state.photo)
            
        }
     <Image
     style={Styles.cellimgStyle}
     source={{uri:this.state.photo}}/>
       
      </View>
    );
  }
}

module.exports = FBLoginButton;
