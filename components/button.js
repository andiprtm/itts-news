import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import * as Font from 'expo-font';

const poppinsMedium = require('../assets/fonts/Poppins-Medium.ttf');
const poppinsSemiBold = require('../assets/fonts/Poppins-SemiBold.ttf');
const poppinsBold = require('../assets/fonts/Poppins-Bold.ttf');

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        fontsLoaded: false,
    }
  }

  async loadFonts() {
    await Font.loadAsync({
        'Poppins-Medium': poppinsMedium,
        'Poppins-SemiBold': poppinsSemiBold,
        'Poppins-Bold': poppinsBold,
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
      );
    } else {
      return null;
    }
  }
}

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