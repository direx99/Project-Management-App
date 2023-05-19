import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
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

      </View>
      <TextInput  placeholder='Search' style={styles.SearchInput}></TextInput>
      <View style={styles.GreetBanner}>
      <Text>Lets Schedule your projects</Text>
      <Text>Lets Schedule your projects</Text>

      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',marginBottom:10}}>
        <Text>Ongoing Projects</Text>
        <Text>Show All</Text>

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


  },
  GreetBanner:{
    borderColor:'#000',
    borderWidth:2,
    width:'100%',
    padding:20,
    borderRadius:20,
    marginVertical:20

  },
  SearchInput:{
    width:'100%',
     backgroundColor:'#F7F7F9',
     padding:10,
    borderRadius:20,
    paddingHorizontal:20,
    marginTop:10,

  }

});
