import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React from "react";
import MobIcon from '../assets/devices.png'
import MenuDot from '../assets/menu-dots-vertical.png'
import * as Progress from 'react-native-progress'


export default function ProjectDash() {
  const { width } = Dimensions.get("window");
  const boxWidth = width / 2 - 25;
  return (
    <View style={styles.container}>
      <View
        style={[styles.box, { width: boxWidth, backgroundColor: "#10376B" }]}
      >
        <View>
          <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
          <Text style={styles.projectBoxDate}>May 30,2023</Text>
          <Image style={styles.MenuDot} source={MenuDot} />

          </View>
          <View style={{flexDirection:"row", paddingTop:15}}>
          <Image style={styles.projectBoxImage} source={MobIcon} />
          <View>
          <Text style={styles.projectBoxTitle}>Mobile App</Text>
          <Text style={styles.projectBoxSubT}>E Commerce</Text>
          </View>
          </View>



        </View>
        <View style={styles.progressstyle}>
        <Text style={styles.progressText}>Progress</Text>
        <Progress.Bar progress={0.5}
        color="#fff"
         style={styles.progessbar}
         />
        <Text style={styles.progressPrecent}>50%</Text>

        </View>
        
      </View>
      <View style={[styles.box, { width: boxWidth }]} />
      <View style={[styles.box, { width: boxWidth }]} />
      <View style={[styles.box, { width: boxWidth }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  box: {
    height:160,
    backgroundColor: "#EDF1FD", // Change this to your desired color
    marginBottom: 10, // Optional spacing between boxes
    borderRadius: 20,
    padding:15,
  },
  projectBoxDate:{
    color:'#9BB7DD',
    fontWeight:600,
    fontSize:12,    
  },
  projectBoxTitle:{
    color:'#fff',
    fontWeight:500,
    fontSize:18,    
  },
  projectBoxSubT:{
    color:'#9BB7DD',
    fontWeight:600,
    fontSize:12,
  },
  projectBoxImage:{
    width: 36, 
    height:36,
    marginRight:5,
  },
  progressstyle:{
    flex:1,
    position:'absolute',
    bottom:15,
    paddingHorizontal:10,
    
  },
  progessbar:{
    
  },
  progressText:{
    color:'#9BB7DD',
    fontWeight:600,
    fontSize:12,
    marginBottom:5,
  },
  progressPrecent:{
     color:'#9BB7DD',
    fontWeight:600,
    fontSize:12,
    marginTop:5,
    alignSelf:'flex-end'
  },
  MenuDot:{
    height:10,
    width:10
  }
});
