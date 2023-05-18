import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProjectDash from './ProjectDash';


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
      <ProjectDash/>

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
    color:"#10376C",
    alignSelf:'flex-start',
    fontWeight:600

  },
  GreetDes:{
    fontSize:15,
    color:"#838686",
    alignSelf:'flex-start',
    fontWeight:600


  }

});
