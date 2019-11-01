import React from 'react';
import {View, StyleSheet, Text, Button, TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Form from './src/Form/form';
import Cell from './src/CellofTable/cell';
import PhotoLoot from './src/PhotoLootChallenges/photoLoot';
import Roads from './src/PrizeAndViews/dataFeed';
import CollectionView from './src/CollectionView/collectionView';
import UIField from './src/Networking/uiField';
import Card from './src/FlatListCard/card';
import CropImage from './src/ImageCrop/cropImage';
import Flag from './src/Flag/flag';

class App extends React.Component {
  render() {
    return (
      <View style={Styles.viewStyle}>
        <Text style={Styles.txtStyle}>Home Screen</Text>
        <TouchableOpacity
          style={Styles.buttonViewStyle}
          onPress={() => this.props.navigation.navigate('Form')}>
          <Text style={Styles.buttontxtStyle}>Go to Form</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.buttonViewStyle}
          onPress={() => this.props.navigation.navigate('Cell')}>
          <Text style={Styles.buttontxtStyle}>Go to Cell</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.buttonViewStyle}
          onPress={() => this.props.navigation.navigate('PhotoLoot')}>
          <Text style={Styles.buttontxtStyle}>Go to PhotoLoot</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.buttonViewStyle}
          onPress={() => this.props.navigation.navigate('Roads')}>
          <Text style={Styles.buttontxtStyle}>Go to Roads</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.buttonViewStyle}
          onPress={() => this.props.navigation.navigate('Collection')}>
          <Text style={Styles.buttontxtStyle}>Go to Collection</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.buttonViewStyle}
          onPress={() => this.props.navigation.navigate('Networking')}>
          <Text style={Styles.buttontxtStyle}>Go to NetworkingTask</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.buttonViewStyle}
          onPress={() => this.props.navigation.navigate('Cards')}>
          <Text style={Styles.buttontxtStyle}>Go to Cards</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.buttonViewStyle}
          onPress={() => this.props.navigation.navigate('ImageCrop')}>
          <Text style={Styles.buttontxtStyle}>Go to Image Crop</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.buttonViewStyle}
          onPress={() => this.props.navigation.navigate('Flag')}>
          <Text style={Styles.buttontxtStyle}>Go to Flag</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const AppNavigator = createStackNavigator(
  {
    Home: {screen: App},
    Form: {screen: Form},
    Cell: {screen: Cell},
    PhotoLoot: {screen: PhotoLoot},
    Roads: {screen: Roads},
    Collection: {screen: CollectionView},
    Networking: {screen: UIField},
    Card: {screen: Card},
    ImageCrop: {screen: CropImage},
    Flag: {screen: Flag},
  },
  {
    initialRouteName: 'Home',
  },
);
const Styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#172735',
  },
  txtStyle: {
    color: 'ghostwhite',
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Chalkboard SE',
  },
  buttontxtStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    padding:10
  },
  buttonViewStyle:{
  marginTop:20,
    borderRadius:15,
  borderColor:'white',
  backgroundColor:'#3F6FEF'

  }
});

export default createAppContainer(AppNavigator);
