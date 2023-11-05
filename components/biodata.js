import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Font from 'expo-font';

const poppinsMedium = require('../assets/fonts/Poppins-Medium.ttf');
const poppinsSemiBold = require('../assets/fonts/Poppins-SemiBold.ttf');
const poppinsBold = require('../assets/fonts/Poppins-Bold.ttf');

export default class Biodata extends React.Component {
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
        <View style={styles.container}>
            <Text style={[styles.title]}>{this.props.title}</Text>
            <Text style={[styles.name]}>{this.props.text}</Text>
        </View>
      );
    } else {
      return null;
    }
  }
}

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