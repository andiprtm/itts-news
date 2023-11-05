import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { useFonts } from 'expo-font';

const poppinsMedium = require('../assets/fonts/Poppins-Medium.ttf');
const poppinsSemiBold = require('../assets/fonts/Poppins-SemiBold.ttf');
const poppinsBold = require('../assets/fonts/Poppins-Bold.ttf');

const BiodataComponent = (props) => {
    const [fontsLoaded] = useFonts({
        'Poppins-Medium': poppinsMedium,
        'Poppins-SemiBold': poppinsSemiBold,
        'Poppins-Bold': poppinsBold,
      });
    
      if (!fontsLoaded) {
        return null;
      }

  return (
    <View style={styles.container}>
      <Text style={[styles.title]}>{props.title}</Text>
      <Text style={[styles.name]}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "600",
    fontFamily: 'Poppins-Bold',
    textAlign: "left",
    color: "black",
    fontSize: 15,
    width: "30%",
    paddingEnd: "1%"
  },
  name: {
    fontWeight: "500",
    fontFamily: 'Poppins-Medium',
    textAlign: "left",
    color: "black",
    fontSize: 15,
    width: "70%",
  },
  container: {
    width: "100%",
    flexDirection: "row",
    paddingVertical: 19,
  },
});

export default BiodataComponent;
