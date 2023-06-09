import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React, { useState } from 'react'
import MobIcon from "../assets/devices.png";
import MenuDot from "../assets/menu-dots-vertical.png";
import * as Progress from "react-native-progress";

const DashboardBox = ({active}) => {
    const { width } = Dimensions.get("window");
    const boxWidth = width / 2 - 25;
  return (
<View style={[styles.box, { width: boxWidth, backgroundColor: active ? '#10376C' : '#EDF1FD' }]}>
      
      <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.projectBoxDate}>May 30,2023</Text>
            <Image style={styles.MenuDot} source={MenuDot} />
          </View>
          <View style={{ flexDirection: "row", paddingTop: 15 }}>
            <Image style={styles.projectBoxImage} source={MobIcon} />
            <View>
              <Text style={[styles.projectBoxTitle,{color: active ? '#fff' : '#424957' }]}>Mobile App</Text>
              <Text style={[styles.projectBoxSubT,{color: active ? '#9BB7DD' : '#9FA5B0' }]}>E Commerce</Text>
            </View>
          </View>
        </View>
        <View style={styles.progressstyle}>
          <Text style={styles.progressText}>Progress</Text>
          {
             active ? (
              
                <>
                <Progress.Bar progress={0.5} 
                color="#fff" 
                style={styles.progessbar} />
                </>
              

             ):(

              <>
              <Progress.Bar progress={0.5} 
              color="#10376C" 
              style={styles.progessbar} />
              </>
             )
          }
        
          <Text style={styles.progressPrecent}>50%</Text>
        </View>
      </View>
  )
}

export default DashboardBox

const styles = StyleSheet.create({box: {
    height: 160,
    backgroundColor: "#EDF1FD", // Change this to your desired color
    marginBottom: 10, // Optional spacing between boxes
    borderRadius: 20,
    padding: 15,
  },
  projectBoxDate: {
    color: "#9BB7DD",
    fontWeight: 600,
    fontSize: 12,
  },
  projectBoxTitle: {
    color: "#fff",
    fontWeight: 500,
    fontSize: 18,
  },
  projectBoxSubT: {
    color: "#9BB7DD",
    fontWeight: 600,
    fontSize: 12,
  },
  projectBoxImage: {
    width: 36,
    height: 36,
    marginRight: 5,
  },
  progressstyle: {
    flex: 1,
    position: "absolute",
    bottom: 15,
    paddingHorizontal: 10,
  },
  progessbar: {},
  progressText: {
    color: "#9BB7DD",
    fontWeight: 600,
    fontSize: 12,
    marginBottom: 5,
  },
  progressPrecent: {
    color: "#9BB7DD",
    fontWeight: 600,
    fontSize: 12,
    marginTop: 5,
    alignSelf: "flex-end",
   
    
  },
  MenuDot: {
    height: 10,
    width: 10,
  },
});
