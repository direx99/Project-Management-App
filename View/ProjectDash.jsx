import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React, { useState } from "react";
import DashboardBox from "./DashboardBox";

export default function ProjectDash() {
  const { width } = Dimensions.get("window");
  const boxWidth = width / 2 - 25;

  return (
    <View style={styles.container}>
     
      
     <DashboardBox active={true}/>
     <DashboardBox active={false}/>
     <DashboardBox active={false}/>
     <DashboardBox active={false}/>

      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  }
});
