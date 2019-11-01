import React from 'react'
import {View,StyleSheet,Text} from 'react-native'

export const Label = () => {
    return(
    <View style={Style.viewStyle}>
        <Text style={Style.txtStyleJan}>
            January
        </Text>
        <Text style={Style.txtStyleChallenge}>
            2 challenges
        </Text>
    </View>
    );
}
const Style = StyleSheet.create({
    viewStyle:{
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    txtStyleJan:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:20
    },
    txtStyleChallenge:{
        marginRight:20
    }
})