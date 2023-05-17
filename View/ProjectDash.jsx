import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'

export default function ProjectDash() {
    const { width } = Dimensions.get('window');
    const boxWidth = width/2-25   
  return (
   <View style={styles.container}>
      <View style={[styles.box, { width: boxWidth , backgroundColor:'#10376B'}]}/>
      <View style={[styles.box, { width: boxWidth }]}/>
      <View style={[styles.box, { width: boxWidth }]}/>
      <View style={[styles.box, { width: boxWidth }]}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  box: {
    height: 120,
    backgroundColor: '#EDF1FD', // Change this to your desired color
    marginBottom: 10, // Optional spacing between boxes
    borderRadius:10,
  },
});