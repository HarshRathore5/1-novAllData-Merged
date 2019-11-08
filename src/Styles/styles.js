import {StyleSheet} from 'react-native';
const Styles = StyleSheet.create({
  cellviewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 50,
  },
  cellimgStyle: {
    width: 80,
    height: 80,
  },
  celltextStyle: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  celltextStyle2: {
    color: 'gray',
  },
  splashViewStyle: {
    
  },
  splashTxtStyle: {
    fontWeight: 'bold',
    fontSize: 28,
    color:'white'
  },
  inputStyle: {
    width: '90%',
    height: '7%',
    margin: 10,
    borderRadius: 10,
    padding: 10,
    borderWidth: 0.3,
  },
  buttonViewStyle: {
    backgroundColor: '#FEE7A5',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '5%',
    margin: 10,
    borderRadius: 10,
  },
  loginViewStyle: {
    flex: 1,
    alignItems: 'center',
  },
  signUpView: {},
  buttontxtStyle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  mainViewStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});
export default Styles;
