import React from 'react'
import {TextInput,View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native'
import Networking from './networking';


export default class UIField extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            searchResult:'Noida'
    }
    }
   

render(){
      return(
          <View style={Styles.viewStyle}>
              <TextInput 
              value={this.state.searchResult}
              onChangeText={(text)=>{this.setState({searchResult:text})}}
              style={Styles.txtInputStyle}>
              </TextInput>
              <Networking
              body={this.state.searchResult}/>
          </View>
      )
  }
}
const Styles=StyleSheet.create({
    txtInputStyle:{
        width:"90%",
        height:40,
        backgroundColor:'ghostwhite',
        marginLeft:20,
        borderWidth:1,
        borderRadius:10,
        padding:10
    },
    viewStyle:{
        marginTop:20,
    }
})