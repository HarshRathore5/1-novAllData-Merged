import React from 'react'
import {Dimensions,Text,Animated} from 'react-native'
import Styles from '../Styles/styles'
export default class SplashScreen extends React.Component{
    state = {
        width: new Animated.Value(0),  
      }
    componentDidMount(){
            setTimeout(() => {
                this.props.navigation.navigate('SignUp')
            }, (2000));
            Animated.timing(                 
                this.state.width,           
                {
                  toValue: Dimensions.get('window').width,               
                  duration: 1000,             
                }
              ).start(); 
    }
    
    
    render(){
        return(
            <Animated.View style={{
                flex:1,
                backgroundColor: '#21A8F3',
            width: this.state.width,
            height: 50,
            justifyContent:'center',
            alignItems: 'center',}}>
                <Text style={Styles.splashTxtStyle}>
                    Welcome
                </Text>
            </Animated.View>
        )
    }
}
