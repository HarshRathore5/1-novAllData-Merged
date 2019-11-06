import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class navigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> navigator </Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
    {
      Splash: {screen: SplashScreen},
      Login: {screen: Login},
      SignUp: {screen: SignUp},
      DashBoard: {screen: DashBoard},
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
      initialRouteName: 'Splash',
      headerMode: 'screen',
    },
  );
  export default createAppContainer(AppNavigator);
