import React, { Component } from "react";
import {
  Image,
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Button from '../components/button';
import Biodata from '../components/biodata';
import LineSeparator from '../components/lineSeparator';
import Separator from '../components/separator';

class Home extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <ScrollView style={styles.container}>
        <Image source={require("../assets/instasi_logo.png")} style={styles.instansiLogo}/>
        
        <Separator height={34} />

        <Image source={require("../assets/profil.png")} style={styles.logo} />

        <Separator height={34} />
        <LineSeparator/>
        <Biodata title="Nama Lengkap" text="Moch. Andi Divangga Pratama"/>
        <LineSeparator/>
        <Biodata title="NIM" text="1203210005"/>
        <LineSeparator/>
        <Biodata title="Program Studi" text="Informatika - Institut Teknolgi Telkom Surabaya"/>
        <LineSeparator/>
        <Biodata title="Angkatan" text="2021"/>
        <LineSeparator/>
        <Separator height={34}/>
        <Button text="Lihat Berita" onPress={() => navigation.navigate("ListNews")}/>
        
      </ScrollView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    paddingHorizontal: 34,
    backgroundColor: "white",
  },
  instansiLogo: {
    width: 76 ,
    height: 28 ,
    resizeMode: "contain",
    alignSelf: "center",
  },
  logo: {
    width: 186,
    height: 186,
    resizeMode: "contain",
    alignSelf: "center",
    borderRadius: 631
  },
  text: {
    fontSize: 16,
  },
});
