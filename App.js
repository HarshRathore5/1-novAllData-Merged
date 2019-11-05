import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
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
import TempHome from './src/editScreen/tempHome'
import Edit from './src/editScreen/edit'

class App extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={Styles.viewStyle}>
        <ScrollView>
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
            onPress={() => this.props.navigation.navigate('Card')}>
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
          <TouchableOpacity
            style={Styles.buttonViewStyle}
            onPress={() => this.props.navigation.navigate('TempHome')}>
            <Text style={Styles.buttontxtStyle}>Go to TempHome</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
const AppNavigator = createStackNavigator(
  {
    Home: {screen: App},
    Form: {
      screen: Form,
      navigationOptions: ({navigation}) => ({
        title: 'Form',
        headerBackTitle: null,
        headerRight: (
          <Button title="Info" onPress={() => navigation.navigate('Cell')} />
        ),
      }),
    },
    Cell: {
      screen: Cell,
      navigationOptions: ({navigation}) => ({
        title: 'Cell',
        headerBackTitle: null,
        headerRight: (
          <Button
            title="Info"
            onPress={() => navigation.navigate('PhotoLoot')}
          />
        ),
      }),
    },
    PhotoLoot: {
      screen: PhotoLoot,
      navigationOptions: ({navigation}) => ({
        title: 'PhotoLoot',
        headerBackTitle: null,
        headerRight: (
          <Button
            title="Info"
            onPress={() => navigation.navigate('Roads')}
          />
        ),
      }),
    },
    Roads: {
      screen: Roads,
      navigationOptions: ({navigation}) => ({
        title: 'Roads',
        headerBackTitle: null,
        headerRight: (
          <Button
            title="Info"
            onPress={() => navigation.navigate('Collection')}
          />
        ),
      }),
    },
    Collection: {
      screen: CollectionView,
      navigationOptions: ({navigation}) => ({
        title: 'Collection View',
        headerBackTitle:  null,
        headerRight: (
          <Button
            title="Info"
            onPress={() => navigation.navigate('Networking')}
          />
        ),
      }),
    },
    Networking: {
      screen: UIField,
      navigationOptions: ({navigation}) => ({
        title: 'Networking',
        headerBackTitle: null,
        headerRight: (
          <Button
            title="Info"
            onPress={() => navigation.navigate('Card')}
          />
        ),
      }),
    },
    Card: {
      screen: Card,
      navigationOptions: ({navigation}) => ({
        title: 'Card',
        headerBackTitle: null,
        headerRight: (
          <Button
            title="Info"
            onPress={() => navigation.navigate('Flag')}
          />
        ),
      }),
    },
    
    ImageCrop: {screen: CropImage},
    Flag: {screen: Flag},
    TempHome: {
      screen:TempHome
    },
    EditScreen:{screen:Edit}
  },
 
  {
    initialRouteName: 'Home',
    headerMode: 'screen',
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
    padding: 10,
  },
  buttonViewStyle: {
    width: '90%',
    marginTop: 20,
    borderRadius: 15,
    borderColor: 'white',
    alignItems: 'center',
    backgroundColor: '#3F6FEF',
  },
});

export default createAppContainer(AppNavigator);
