import React from 'react'
import { Text,Image,View,StyleSheet} from 'react-native'
export const Description=()=>{
    return(
        <View >
            <View style={Styles.container}>
            <Image style={Styles.imgStyle}
            source={require('./footerImages/descriptionicon.png')} />
            <Text style={Styles.headingStyle}>
                    Description
                </Text>
                </View>
                <Text style={Styles.descriptionStyle}>
                    {DataToShow.Description}
                </Text>
           
        </View>
    )
}

export const Rules=()=>{

    return(
        <View >
            <View style={Styles.container}>
            <Image style={Styles.imgStyle}
            source={require('./footerImages/rulesicon.png')} />
            <Text style={Styles.headingStyle}>
                    Rules
                </Text>
                </View>
                <View style={Styles.rulesStyle}>
                    <Image source={require('./footerImages/checkMark.png')}/>
                <Text style={Styles.descriptionStyle}>
                    {DataToShow.Rules[0]}
                </Text>
                </View>
                <View style={Styles.rulesStyle}>
                    <Image source={require('./footerImages/checkMark.png')}/>
                <Text style={Styles.descriptionStyle}>
                   {DataToShow.Rules[1]}
                </Text>
                </View>
                <View style={Styles.rulesStyle}>
                    <Image source={require('./footerImages/checkMark.png')}/>
                <Text style={Styles.descriptionStyle}>
                    {DataToShow.Rules[2]}
                </Text>
                </View>
                <View style={Styles.rulesStyle}>
                    <Image source={require('./footerImages/checkMark.png')}/>
                <Text style={Styles.descriptionStyle}>
                    {DataToShow.Rules[3]}
                </Text>
                </View>
                <View style={Styles.rulesStyle}>
                    <Image source={require('./footerImages/checkMark.png')}/>
                <Text style={Styles.descriptionStyle}>
                    {DataToShow.Rules[4]}
                </Text>
                </View>

        </View>
    )
}

export default Description;

const Styles=StyleSheet.create({
    headingStyle:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:20
    },
    descriptionStyle:{
        marginRight:40,
        marginTop:10,
        marginLeft:20,
        color:"#A4A4A4",
        textAlign:'justify'
    },
    container:{
        marginLeft:20,
        marginRight:20,
        flexDirection:'row',
        alignItems:'center'
    },
    rulesStyle:{
        flexDirection:'row',
        marginLeft:20,
        marginRight:20
    },
    imgStyle:{
        width:30,
        height:30,
        marginTop:20,
        marginRight:20
    }
})
const DataToShow = {"Rules": ["You must own the image you submit.",
"No nudity/inappropriate content.",
"Stick to the theme of the challange.",
"No voting with fake accounts.",
"To receive prizes, you must have a legitimate PayPal account.",
"Photos that violate any of the rules will be removed."], 
"Description": 
["This challenge is all about uploading the posts about your recent travels to places usually less travelled. Post more of your travelling pictures and get the chance to win."]}