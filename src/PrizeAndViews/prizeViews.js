import React from 'react'
import {View,Text,Image,StyleSheet,Dimensions} from 'react-native'
export const PrizeViews=()=>{
    return(
        <View style={Styles.mainViewStyle}>
            <View style={Styles.shadowViewStyle}>
                <Image style={Styles.imgStyle}
                source={require('../assets/footerImages/goldMedal.png')}/>
                <View >
                    <Text style={Styles.grayTextStyle}>1st Prize</Text>
                    <Text style={Styles.colorTextStyle}>$125</Text>
                </View>
            </View>
            <View style={Styles.shadowViewStyle}>
                <Image style={Styles.imgStyle}
                source={require('../assets/footerImages/goldMedal.png')}/>
                <View>
                    <Text style={Styles.grayTextStyle}>2nd Prize</Text>
                    <Text style={Styles.colorTextStyle}>$60</Text>
                </View>
            </View>
            <View style={Styles.shadowViewStyle}>
                <Image style={Styles.imgStyle}
                 source={require('../assets/footerImages/goldMedal.png')}/>
                <View>
                    <Text style={Styles.grayTextStyle}>3rd Prize</Text>
                    <Text style={Styles.colorTextStyle}>$35</Text>
                </View>
            </View>
        </View>
    )
}
export default PrizeViews;

const Styles = StyleSheet.create({
    mainViewStyle:{
        flexDirection:'row',
        marginTop:20,
        marginLeft:20,
        marginRight:20,
        height: 120,
        
    },
    shadowViewStyle:{
        flexDirection:'row',
        width: Dimensions.get('screen').width/4,
        height:100,
        shadowColor:'gray',
        borderRadius:5,
        backgroundColor:'white',
        shadowOpacity:0.4,
        elevation:12,
        shadowOffset:{width: 0,height: 10},
        marginRight:20,
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    grayTextStyle:{
        color:'gray',
        fontSize:12,
        marginRight:5
    },
    colorTextStyle:{
        color:'#66D680',
        fontWeight:'bold',
        fontSize:16
    },
    imgStyle:{
       
        width:30,
        height:30,
        marginRight:10
    }
    
    
})