import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Home() {

  const [name,setName] = useState("Dinith")

  
  return (
    <View style={styles.HomeContainer}>
      <View style={styles.TopView}>
      <Text>Home</Text>
      <Text>Home</Text>
      </View>

      <View style={styles.GreetName}>
      <Text style={styles.GreetName}>Hi {name}</Text>
      <Text style={styles.GreetDes}>Good Morning</Text>

      <Text></Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  TopView:{
    flexDirection:'row',
  },
  Greet:{
    flex:1,
    flexDirection:'row',
  },

  GreetName:{
    fontSize:24,
    color:"#000",
    alignSelf:'flex-start'

  },
  GreetDes:{
    fontSize:15,
    color:"#000",
    alignSelf:'flex-start'

    
  }

});