import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
import { useFonts } from 'expo-font';

const poppinsMedium = require('../assets/fonts/Poppins-Medium.ttf');
const poppinsSemiBold = require('../assets/fonts/Poppins-SemiBold.ttf');
const poppinsBold = require('../assets/fonts/Poppins-Bold.ttf');

const Button = (props) => {
    const [fontsLoaded] = useFonts({
        'Poppins-Medium': poppinsMedium,
        'Poppins-SemiBold': poppinsSemiBold,
        'Poppins-Bold': poppinsBold,
      });
    
      if (!fontsLoaded) {
        return null;
      }

    return (
      <TouchableOpacity style={styles.container} onPress={props.onPress}>
        <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#B81519",
    borderRadius: 12,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    justifyContent: "center"
  },
  text: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#fff',
  },
});

export default Button;
