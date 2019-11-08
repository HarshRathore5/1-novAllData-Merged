import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import I18n from './src/translations/I18n';

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
import SplashScreen from './src/storageTask/splashScreen';
import Login from './src/storageTask/login';
import SignUp from './src/storageTask/signUp';
import DashBoard from './src/storageTask/dashboard';
import GoogleSigning from './src/SignIn/googleSigning';
import Details from './src/SignIn/details';

class App extends React.Component {
  navigate = page => {
    this.props.navigation.navigate(page);
  };
  render() {
    return (
      <ScrollView
        style={Styles.viewStyle}
        contentInset={{top: 5, bottom: 20}}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={Styles.txtStyle}>{I18n.t('HomeScreen')}</Text>
        <TouchableOpacity
          style={Styles.buttonViewStyle}
          onPress={() => this.navigate('Form')}>
          <Text style={Styles.buttontxtStyle}>{I18n.t('GoToForm')}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={Styles.buttonViewStyle}
          onPress={() => this.navigate('Cell')}>
          <Text style={Styles.buttontxtStyle}>{I18n.t('GoToCell')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.buttonViewStyle}
          onPress={() => this.navigate('PhotoLoot')}>
          <Text style={Styles.buttontxtStyle}>{I18n.t('GoToPhotoLoot')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.buttonViewStyle}
          onPress={() => this.navigate('Roads')}>
          <Text style={Styles.buttontxtStyle}>{I18n.t('GoToRoads')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.buttonViewStyle}
          onPress={() => this.navigate('Collection')}>
          <Text style={Styles.buttontxtStyle}>{I18n.t('GoToCollection')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.buttonViewStyle}
          onPress={() => this.navigate('Networking')}>
          <Text style={Styles.buttontxtStyle}>{I18n.t('GoToNetworking')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.buttonViewStyle}
          onPress={() => this.props.navigation.navigate('Card')}>
          <Text style={Styles.buttontxtStyle}>{I18n.t('GoToCards')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.buttonViewStyle}
          onPress={() => this.navigate('ImageCrop')}>
          <Text style={Styles.buttontxtStyle}>{I18n.t('GoToImageCrop')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.buttonViewStyle}
          onPress={() => this.navigate('Flag')}>
          <Text style={Styles.buttontxtStyle}>{I18n.t('GoToFlag')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.buttonViewStyle}
          onPress={() => this.navigate('TempHome')}>
          <Text style={Styles.buttontxtStyle}>{I18n.t('GoToTempHome')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.buttonViewStyle}
          onPress={() => this.navigate('Splash')}>
          <Text style={Styles.buttontxtStyle}>{I18n.t('GoToSplash')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.buttonViewStyle}
          onPress={() => this.navigate('SignIn')}>
          <Text style={Styles.buttontxtStyle}>{I18n.t('SignIn')}</Text>
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

    Splash: {screen: SplashScreen},
    Login: {screen: Login},
    SignUp: {screen: SignUp},
    DashBoard: {screen: DashBoard},
    SignIn: {screen: GoogleSigning},
    details: {screen: Details},
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
