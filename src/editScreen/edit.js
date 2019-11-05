import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Linking
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import permission, {
  check,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions';
import {RNS3} from 'react-native-aws3'



export default class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: this.props.navigation.state.params.firstName,
      last: this.props.navigation.state.params.lastName,
      uploadPath:'file://',
      imagePath:
        'https://tse3.mm.bing.net/th?id=OIP.0KIQ-UTdpUIr8kUWz5kVYgHaE8&pid=Api',
    };
  }
  update = () =>{
    const file = {
      // `uri` can also be a file system path (i.e. file://)
      uri: this.state.uploadPath+this.state.imagePath,
      name: "image.png",
      type: "image/png"
    }
     
    const options = {
      keyPrefix: "uploads/",
      bucket: "appinventiv-development",
      region: "us-east-1",
      accessKey: "AKIAJ3UHQTWRRT2AH3RA",
      secretKey: "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",
      successActionStatus: 201
    }
     
    RNS3.put(file, options).then(response => {
      if (response.status !== 201)
        throw new Error("Failed to upload image to S3");
      console.log(response.body);
      /**
       * {
       *   postResponse: {
       *     bucket: "your-bucket",
       *     etag : "9f620878e06d28774406017480a59fd4",
       *     key: "uploads/image.png",
       *     location: "https://your-bucket.s3.amazonaws.com/uploads%2Fimage.png"
       *   }
       * }
       */
    });
  }
  reqPermission() {
    permission.request(PERMISSIONS.IOS.PHOTO_LIBRARY);
    this.anything();
  }

  anything = () => {
    check(PERMISSIONS.IOS.PHOTO_LIBRARY)
      .then(result => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.warn(
              'This feature is not available (on this device / in this context)',
            );
            break;
          case RESULTS.DENIED:
            console.warn(
              'The permission has not been requested / is denied but requestable',
            );
            break;
          case RESULTS.GRANTED:
            ImagePicker.openPicker({
              width: 300,
              height: 400,
              cropping: true,
            }).then(image => {
              this.setState({
                imagePath: image.path,
              });
              this.update()
              console.log(image);
            });
            
            break;
          case RESULTS.BLOCKED:
            console.warn(
              'The permission is denied and not requestable anymore',
            );
            Alert.alert(  
              'Alert Title',  
              'My Alert Msg',  
              [  
                    
                  {text: 'OK', onPress: () => Linking.openSettings()},  
              ]  
          )
            break;
        }
      })
      .catch(error => {
        console.log(error)
      });
  };

  save = () => {
    this.props.navigation.state.params.update(
      this.state.first,
      this.state.last,
      this.state.imagePath,
    );
    this.props.navigation.navigate('TempHome');
  };
  render() {
    return (
      <View style={Styles.viewStyle}>
        <TextInput
          placeholder={this.state.first}
          onSubmitEditing={() => {
            this.lastNameInput.focus();
          }}
          onChangeText={val => {
            this.setState({first: val});
          }}
          returnKeyType="next"
          style={Styles.txtInputStyle}></TextInput>
        <TextInput
          placeholder={this.state.last}
          ref={input => {
            this.lastNameInput = input;
          }}
          onSubmitEditing={() => this.save()}
          onChangeText={val => {
            this.setState({last: val});
          }}
          returnKeyType="done"
          style={Styles.txtInputStyle}></TextInput>
        <TouchableOpacity
          style={Styles.imgViewStyle}
          onPress={() => this.reqPermission()}>
          <Image style={Styles.imgStyle} source={{uri: this.state.imagePath}} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.save()}
          style={Styles.buttonStyle}>
          <Text style={Styles.txtStyle}>Submit</Text>
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
  txtInputStyle: {
    height: 40,
    width: '90%',
    backgroundColor: 'lightgray',
    margin: 20,
    padding: 10,
  },
  txtStyle: {
    fontSize: 20,
  },
  buttonStyle: {
    backgroundColor: 'powderblue',
    borderRadius: 5,
    marginTop: 20,
  },
  imgViewStyle: {
    margin: 20,
  },
  imgStyle: {
    width: 300,
    height: 200,
  },
});
