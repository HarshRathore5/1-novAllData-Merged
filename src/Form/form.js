import React from 'react';

import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Table from './table';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: new Date().getTime(),
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      street: '',
      city: '',
      state: '',
      country: '',
      pin: '',
      empRecord: [],
      buttonState: true,
    };
  }
  checkFields() {
    if (!this.validateBtn()) {
      this.handlePress();
    }
  }

  validateBtn() {
    var toReturn =
      this.state.firstName.length == 0 ||
      this.state.lastName.length == 0 ||
      this.state.email.length == 0 ||
      this.state.jobTitle.length == 0;
    return toReturn;
  }

  handlePress() {
    let payload = {
      id: this.state.buttonState ? new Date().getTime() : idToRemove,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      jobTitle: this.state.jobTitle,
      street: this.state.street,
      city: this.state.city,
      state: this.state.state,
      country: this.state.country,
      pin: this.state.pin,
    };
    let empRecord = this.state.empRecord;
    if (this.state.buttonState) {
      empRecord.push(payload);
      this.setState(
        {
          empRecord: empRecord,
        },
        () => {
          console.log(this.state.empRecord);
        },
      );
    } else {
      (empRecord[index] = payload),
        this.setState(
          {
            empRecord: empRecord,
            buttonState: true,
          },
          () => {
            console.log(this.state.empRecord);
          },
        );
    }

    this.clearTextInput();
  }

  remove = id => {
    tempToRemove = this.state.empRecord;
    indexToRemove = tempToRemove.findIndex(a => a.id === id);
    tempToRemove.splice(indexToRemove, 1);
    this.setState({empRecord: tempToRemove});
  };
  edit = id => {
    this.setState({
      buttonState: false,
    });
    temp = this.state.empRecord;
    index = temp.findIndex(index => index.id === id);
    idToRemove = id;
    this.setState({
      firstName: temp[index].firstName,
      lastName: temp[index].lastName,
      email: temp[index].email,
      jobTitle: temp[index].jobTitle,
      empRecord: temp,
    });
  };

  clearTextInput() {
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
    });
  }

  render() {
    return (
      <SafeAreaView>
        <View style={styles.viewStyle}>
          <Text style={styles.textstyle}>First Sample</Text>
          <Button
          title="Go To Cell"
          onPress={()=>this.props.navigation.navigate('Cell')}/>
        </View>
        <View style={styles.container}>
          <View style={styles.viewStyle2}>
            <Text style={styles.nameStyle}>FIRST NAME</Text>
            <TextInput
              style={styles.textInputStyle}
              value={this.state.firstName}
              onChangeText={text => this.setState({firstName: text})}
              placeholder="Enter first name here"></TextInput>
          </View>
          <View style={styles.viewStyle2}>
            <Text style={styles.nameStyle}>LAST NAME</Text>
            <TextInput
              style={styles.textInputStyle}
              value={this.state.lastName}
              onChangeText={text => this.setState({lastName: text})}
              placeholder="Enter last name here"></TextInput>
          </View>
          <View style={styles.viewStyle2}>
            <Text style={styles.nameStyle}>E-MAIL</Text>
            <TextInput
              style={styles.textInputStyle}
              value={this.state.email}
              onChangeText={text => this.setState({email: text})}
              placeholder="Enter e-mail here"></TextInput>
          </View>

          <View style={styles.viewStyle2}>
            <Text style={styles.nameStyle}>JOB TITLE</Text>
            <TextInput
              style={styles.textInputStyle}
              value={this.state.jobTitle}
              onChangeText={text => this.setState({jobTitle: text})}
              placeholder="Enter job title here"></TextInput>
          </View>
          <TouchableOpacity
            disabled={this.validateBtn()}
            style={[
              this.validateBtn() ? styles.buttonDisableStyle : styles.buttonStyle]}
    
            onPress={() => this.checkFields()}>
            <Text style={styles.nameStyle}>
              {this.state.buttonState ? 'Submit' : 'Update'}
            </Text>
          </TouchableOpacity>
          <Table
            item={this.state.empRecord}
            remove={this.remove}
            edit={this.edit}
          />
        </View>
        {/* <View style={styles.viewStyle2}>
            <Text style={styles.nameStyle}>STREET</Text>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={text => this.setState({street: text})}
              placeholder="Enter street here"></TextInput>
          </View>
          
          <View style={styles.viewStyle2}>
            <Text style={styles.nameStyle}>CITY</Text>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={text => this.setState({city: text})}
              placeholder="Enter city here"></TextInput>
          </View>
           <View style={styles.viewStyle2}>
            <Text style={styles.nameStyle}>STATE</Text>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={text => this.setState({state: text})}
              placeholder="Enter state here"></TextInput>
          </View> */}
        {/* <View style={styles.viewStyle2}>
            <Text style={styles.nameStyle}>COUNTRY</Text>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={text => this.setState({country: text})}
              placeholder="Enter country here"></TextInput>
          </View>
          <View style={styles.viewStyle2}>
            <Text style={styles.nameStyle}>PIN</Text>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={text => this.setState({pin: text})}
              placeholder="Enter PIN here"></TextInput>
          </View>

          <View style={styles.viewStyle2}>
            <Text style={styles.nameStyle}>PASSWORD</Text>
            <TextInput
              style={styles.textInputStyle}
              secureTextEntry={true}></TextInput>
          </View>  */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#5ef2e8',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textstyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },
  viewStyle2: {
    //justifyContent: 'flex-start',
    //alignItems: 'flex-start',
    paddingTop: 10,
  },
  container: {
    //flex: 1,
    height: '100%',
    padding: 10,
    marginBottom: 30,
  },
  viewStyle3: {
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textInputStyle: {
    borderWidth: 1,
    height: 40,
    borderColor: 'gray',
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 50,
    marginRight: 16,
    marginLeft: 16,
    backgroundColor: 'white',
    width: '90%',
  },

  nameStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 16,
    marginBottom: 8,
  },

  touchableStyle: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  buttonStyle: {
    marginTop: 20,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
  },
  buttonDisableStyle: {
    marginTop: 20,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
  },
});
