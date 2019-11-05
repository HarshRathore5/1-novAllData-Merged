import React from 'react'
import {StyleSheet, SafeAreaView , ScrollView,Alert} from 'react-native'
import {Header} from '../../src/PhotoLootChallenges/header'
import { Label } from '../../src/PhotoLootChallenges/label'
import { MainView } from '../../src/PhotoLootChallenges/mainView'
import { RepeatView } from '../../src/PhotoLootChallenges/repeatView'
import {FloatingButton} from '../../src/PhotoLootChallenges/floatingButton'
import {TabBar} from '../../src/PhotoLootChallenges/tabBar'

export default class App extends React.Component{
  render(){
    return(  
    
      <SafeAreaView style={{flex:1}}>
      
      <ScrollView>
      <Label/>
      <MainView/>
      <RepeatView/>
      <RepeatView/>
      </ScrollView>
      <FloatingButton
      navigation={this.props.navigation}/>
      <TabBar/>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  appThemeStyle:{
    height:80,
    width:"100%",
    backgroundColor:'#FB9701',
    alignItems:'center'
  },
  textStyle:{
    fontWeight:'bold',
    color:'ghostwhite',
    fontSize:28,
    marginTop:40
  }
})