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
import I18n from './src/translations/I18n'

import Form from './src/Form/form';
import Cell from './src/CellofTable/cell';
import PhotoLoot from './src/PhotoLootChallenges/photoLoot';
import Roads from './src/PrizeAndViews/dataFeed';
import CollectionView from './src/CollectionView/collectionView';
import UIField from './src/Networking/uiField';
import Card from './src/FlatListCard/card';
import CropImage from './src/ImageCrop/cropImage';
import Flag from './src/Flag/flag';
import TempHome from './src/editScreen/tempHome';
import Edit from './src/editScreen/edit';
import strings from './src/translations/strings';

class App extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <ScrollView
        style={Styles.viewStyle}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={Styles.txtStyle}>{I18n.t("HomeScreen")}</Text>
        <TouchableOpacity
          style={Styles.buttonViewStyle}
          onPress={() => this.props.navigation.navigate('Form')}>
          <Text style={Styles.buttontxtStyle}>{I18n.t("GoToForm")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.buttonViewStyle}
          onPress={() => this.props.navigation.navigate('Cell')}>
          <Text style={Styles.buttontxtStyle}>{I18n.t("GoToCell")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.buttonViewStyle}
          onPress={() => this.props.navigation.navigate('PhotoLoot')}>
          <Text style={Styles.buttontxtStyle}>{I18n.t("GoToPhotoLoot")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.buttonViewStyle}
          onPress={() => this.props.navigation.navigate('Roads')}>
          <Text style={Styles.buttontxtStyle}>{I18n.t("GoToRoads")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.buttonViewStyle}
          onPress={() => this.props.navigation.navigate('Collection')}>
          <Text style={Styles.buttontxtStyle}>{I18n.t("GoToCollection")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.buttonViewStyle}
          onPress={() => this.props.navigation.navigate('Networking')}>
          <Text style={Styles.buttontxtStyle}>{I18n.t("GoToNetworking")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.buttonViewStyle}
          onPress={() => this.props.navigation.navigate('Card')}>
          <Text style={Styles.buttontxtStyle}>{I18n.t("GoToCards")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.buttonViewStyle}
          onPress={() => this.props.navigation.navigate('ImageCrop')}>
          <Text style={Styles.buttontxtStyle}>{I18n.t("GoToImageCrop")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.buttonViewStyle}
          onPress={() => this.props.navigation.navigate('Flag')}>
          <Text style={Styles.buttontxtStyle}>{I18n.t("GoToFlag")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.buttonViewStyle}
          onPress={() => this.props.navigation.navigate('TempHome')}>
          <Text style={Styles.buttontxtStyle}>{I18n.t("GoToTempHome")}</Text>
        </TouchableOpacity>
      </ScrollView>
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
          <Button title="Info" onPress={() => navigation.navigate('Roads')} />
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
        headerBackTitle: null,
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
          <Button title="Info" onPress={() => navigation.navigate('Card')} />
        ),
      }),
    },
    Card: {
      screen: Card,
      navigationOptions: ({navigation}) => ({
        title: 'Card',
        headerBackTitle: null,
        headerRight: (
          <Button title="Info" onPress={() => navigation.navigate('Flag')} />
        ),
      }),
    },

    ImageCrop: {screen: CropImage},
    Flag: {screen: Flag},
    TempHome: {
      screen: TempHome,
    },
    EditScreen: {screen: Edit},
  },

  {
    initialRouteName: 'Home',
    headerMode: 'screen',
  },
);
const Styles = StyleSheet.create({
  viewStyle: {
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
