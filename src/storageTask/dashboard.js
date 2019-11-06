import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {images} from '../Images/imagePath';
import I18n from '../translations/I18n';


export default class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      number: '',
      city: '',
      state: '',
      sign: '',
      emailAddress: '',
    };
  }
  componentDidMount() {
    this.assignData();

  }
  assignData = () => {
    AsyncStorage.multiGet(
      ['fName', 'lName', 'email', 'number', 'city', 'state','emailAdd'],
      (err, result) => {
        this.setState({
          fname: result[0][1],
          lname: result[1][1],
          email: result[2][1],
          number: result[3][1],
          city: result[4][1],
          state: result[5][1],
          emailAddress: result[6][1]
        });
      },
    );
  //   AsyncStorage.getItem('emailAdd', (er, result) => {
  //     console.warn(result);
  //     this.setState({
  //       emailAddress: result,
  //     });
  //   });
  };
  clearData() {
    AsyncStorage.clear();
    this.assignData();
  }

  renderText(text) {
    return <Text style={Styles.txtStyle}>{text}</Text>;
  }

  render() {
    return (
      <React.Fragment>
        <View style={Styles.topViewStyle}>
          <Image style={Styles.imgStyle} source={images.dashboardPersonImage} />
        </View>
        <View style={Styles.bottomViewStyle}>
          <View style={Styles.dataView}>
            <View>
              {this.renderText(I18n.t('FirstName'))}
              {this.renderText(I18n.t('LastName'))}
              {this.renderText(I18n.t('Email'))}
              {this.renderText(I18n.t('Number'))}
              {this.renderText(I18n.t('City'))}
              {this.renderText(I18n.t('State'))}
              {this.renderText(I18n.t('emailAddress'))}
              
            </View>
            <View>
              {this.renderText(this.state.fname)}
              {this.renderText(this.state.lname)}
              {this.renderText(this.state.email)}
              {this.renderText(this.state.number)}
              {this.renderText(this.state.city)}
              {this.renderText(this.state.state)}
              {this.renderText(this.state.emailAddress)}

            </View>
          </View>
          <TouchableOpacity
            style={Styles.buttonViewStyle}
            onPress={() => {
              this.clearData();
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>{I18n.t('clearData')}</Text>
          </TouchableOpacity>
        </View>
      </React.Fragment>
    );
  }
}
const Styles = StyleSheet.create({
  topViewStyle: {
    height: '25%',
    backgroundColor: '#F45190',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomViewStyle: {
    alignItems: 'stretch',
    justifyContent: 'space-around',
    marginLeft: 20,
  },
  dataView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonViewStyle: {
    backgroundColor: '#FEE7A5',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: '15%',
    margin: 10,
    borderRadius: 10,
  },
  txtStyle: {
    fontSize: 18,
  },
  imgStyle: {
    height: 100,
    marginTop: 50,
    borderRadius: 50,
    width: 100,
    backgroundColor: 'white',
  },
});
