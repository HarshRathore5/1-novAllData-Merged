import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity,Button} from 'react-native';

export default class Table extends Component {
  render() {
    return (
      <View style={{height: 300}}>
        <FlatList
          ItemSeparatorComponent={() => (
            <View
              style={{
                marginTop: 10,
                backgroundColor: 'red',
                borderRadius: 5,
                height: 1,
                width: '100%',
              }}
            />
          )}
          style={styles.tableStyle}
          contentContainerStyle={{}}
          extraData={this.state}
          data={this.props.item}
          renderItem={rowData => (
            <View style={styles.viewStyle}>
              <View>
                <Text style={styles.textStyle}>First Name</Text>
                <Text style={styles.textStyle}>Last Name</Text>
                <Text style={styles.textStyle}>E-Mail</Text>
                <Text style={styles.textStyle}>Job Title</Text>
                <Button
                  title="Delete"
                  onPress={
                    () => this.props.remove(rowData.item.id)
                  }
                />
                
              </View>
              <View>
                <Text style={styles.textStyle}>{rowData.item.firstName}</Text>
                <Text style={styles.textStyle}>{rowData.item.lastName}</Text>
                <Text style={styles.textStyle}>{rowData.item.email}</Text>
                <Text style={styles.textStyle}>{rowData.item.jobTitle}</Text>
                <TouchableOpacity  style={styles.editnDeleteStyle} onPress={
                    () => this.props.edit(rowData.item.id)
                  }>
                    <Text style={styles.editndelTextsStyle}>Edit</Text>
                </TouchableOpacity>
                
                
              </View>
              
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    borderRadius:10,
    backgroundColor:'#ffffff',
    shadowOpacity:1,
    elevation:5,
    shadowColor:'lightgray',
    shadowOffset:{
      width:0,
      height:0
    }
  },
  textStyle: {
    paddingTop:10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  tableStyle: {
    marginTop: 20,
  },
  editnDeleteStyle:{
    
  },
  editndelTextsStyle:{
    fontSize:20,
    color:'#288FFF'
  }
  
});
