
import React from 'react';
import {  StyleSheet, Text, View } from 'react-native';
//yaha prop ain gy jo di h
const Displaylove=(prop)=>{
    //hm daikty h y prop arhy h y ni
    console.log(prop)
    if(prop.data=="loading")
    {
        return<Text style={styles.text}>waiting</Text>
    }
    else if(prop.data.message)
    {
        return<Text style={styles.text}>sorry something went to wrong</Text>
    }
    else
    {
    return(
        <View style={styles.container}>
            {/* //yaha data show hoga pehly percentage, result ki jaga dynamic */}
    <Text style={styles.text}>{prop.data.percentage}</Text>
    <Text style={styles.text}>{prop.data.result}</Text>
        </View>
    )
    }
}
export default Displaylove;
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff'
    },
    text:{
        fontSize:30,
        textAlign:"center"
    }
})