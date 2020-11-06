import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Displaylove from './components/DisplayLove';
import { Appbar ,TextInput,Button} from 'react-native-paper';

export default class App extends React.Component {
  //propties
  state={
    fname:"",
    sname:"",
    result:"loading"

  };

  submitit(){
    //data fetch
    //backtext (`)apply kry gy inverted comma ki jaga kiyoky user value .. value state ky through apply kry gy
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`,{
      headers:{
    "x-rapidapi-key": "21981781e9msh8ca4d33c2038c40p1f91e4jsn8201c0007818",
  "x-rapidapi-host": "love-calculator.p.rapidapi.com"
      }
    })
  .then(data=>data.json())
  .then(data2=>{
    //console m daikny ky ly thek h ya ni
    console.log(data2)
    //ab hm sceen pr print krna chahrhy h
    this.setState({result:data2})
  })
  }
  render(){
  return (
    <View style={styles.container}>
       <Appbar.Header >
     
      <Appbar.Content title="Love % Calculator" />
    </Appbar.Header>
    <TextInput
      label="Person1(male)"
      value={this.state.text}
      //ismy value put kry change hogy field m phir verify kry ga
      onChangeText={text =>this.setState({fname:text})}
    />
    <TextInput
      label="Person2(female)"
      value={this.state.text}
      //ismy value put kry change hogy field m phir verify kry ga
      onChangeText={text => this.setState({sname:text})}
    />
    {/*bind wala bhi use krskty h*/}
    <Button style={{margin:20}}icon="AllOut" mode="contained" onPress={() => this.submitit()}>
    Calculate
  </Button>
     
      <StatusBar style="auto" />
    {/* component m prop result wali pss kry gy */}
      <Displaylove data={this.state.result} />
    </View>
  );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
   
  },
});
