import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Linking,
} from "react-native";
import Separator from "../components/separator";
import Button from "../components/button";
import { LinearGradient } from "expo-linear-gradient";
import * as Font from 'expo-font';

const poppinsMedium = require('../assets/fonts/Poppins-Medium.ttf');
const poppinsSemiBold = require('../assets/fonts/Poppins-SemiBold.ttf');
const poppinsBold = require('../assets/fonts/Poppins-Bold.ttf');

class NewsDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fontsLoaded: false,
        };
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
    const { route } = this.props;
    const data = route.params.data;

    if (this.state.fontsLoaded) {
        return (
            <ScrollView style={styles.container}>
              <View style={styles.rectangleParent}>
                  <Image style={styles.groupPosition} resizeMode="cover" source={{ uri: data.image }} />
                  <LinearGradient style={[styles.groupItem, styles.groupPosition]} colors={['rgba(217, 217, 217, 0)','#fff']} />
              </View>
              <Separator height={10} />
              <View style={{ padding: "6%" }}>
                <Text style={styles.title}>{data.title}</Text>
                <Separator height={10} />
                <Text style={styles.keterangan}>Terakhir diubah pada: {data.date}</Text>
                <Separator height={30} />
                <Text style={styles.text}>{'\t'}{'\t'}{'\t'}{'\t'}{'\t'}{data.content}</Text>
                <Separator height={20} />
                <Button
                  text="Baca Lebih Lanjut"
                  onPress={() => Linking.openURL(data.link).catch((err) => console.error("Error", err))
                }
              />
              </View>
            </ScrollView>
          );
    }else{
        return null;
    }
  }
}

export default NewsDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "stretch",
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center"
  },
  text: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    textAlign: "justify"
  },
  groupPosition: {
    width: 430,
    left: 0,
    top: 0,
    position: "absolute",
    height: 258,
  },
  groupItem: {
    backgroundColor: "transparent"
  },
  rectangleParent: {
    width: "100%",
    height: 200,
    backgroundColor: "red"
  },
  keterangan: {
    fontFamily: "Poppins-Medium",
    fontSize: 12,
    textAlign: "center"
  }
});
