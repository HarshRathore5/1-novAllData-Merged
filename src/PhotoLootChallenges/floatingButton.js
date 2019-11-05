import React from 'react'
import {TouchableOpacity,Image,StyleSheet,Alert} from 'react-native'

export const FloatingButton = (props) =>{
   
        return(
           
            <TouchableOpacity style={Styles.floatStyle}
                onPress={()=>props.navigation.navigate('Roads')}>
                <Image source={require('../assets/footerImages/floatButtonImage.png')} 
                style={Styles.imgStyle}/>
            </TouchableOpacity>
            
        )
    
}
const Styles=StyleSheet.create({
    floatStyle:{
        backgroundColor:"#FB9701",
        width:50,
        height:50,
        alignItems:'center',
        borderRadius:10,
        bottom:100,
        right:10,
        position:'absolute',
        justifyContent:'center'
    },
    imgStyle:{
    width:30,
    height:30   
    }
})