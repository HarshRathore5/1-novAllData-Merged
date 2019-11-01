import React, {useState} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

export class LoadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      download: false,
    };
  }
  onLoadImage = () => {
      setTimeout(() => {
        this.setState({download: true});
      }, 1000);
    
  };
  render() {
    return (
      <View>
         
        <Image
          onLoad={() => this.onLoadImage()}
          style={Styles.imgStyle}
          source={{uri: this.props.item.avatar}}
        />
          {   !this.state.download &&
        <Image style={Styles.imgStyle} 
        source={require('../assets/footerImages/goldMedal.png')} />}
      </View>
          
    )
  }
}

const Styles = StyleSheet.create({
  imgStyle: {
    width: 100,
    height: 100,
    position:'absolute',
    marginVertical: 15,
    borderRadius: 10,
  },
});
