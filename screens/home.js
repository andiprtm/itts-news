import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
} from "react-native";
import { Center, Image } from 'native-base';
import { Biodata, Separator, Button, LineSeparator} from "../components";

class Home extends Component {
  render() {
    const { navigation } = this.props;

    return (
        <ScrollView style={styles.container}>
          <Image 
            source={require("../assets/instasi_logo.png")} 
            style={styles.instansiLogo} 
            alt="logo informatika dan itts"/>
          
          <Separator height={34} />

          <Center>
            <Image 
              size={186} 
              borderRadius={100} 
              source={require("../assets/profil.png")} 
              alt="Alternate Text" />
          </Center>

          <Separator height={34} />
          <LineSeparator/>
          <Biodata 
            title="Nama Lengkap" 
            text="Moch. Andi Divangga Pratama"/>
          <LineSeparator/>
          <Biodata 
            title="NIM" 
            text="1203210005"/>
          <LineSeparator/>
          <Biodata 
            title="Program Studi" 
            text="Informatika - Institut Teknolgi Telkom Surabaya"/>
          <LineSeparator/>
          <Biodata 
            title="Angkatan" 
            text="2021"/>
          <LineSeparator/>
          <Separator height={34}/>
          <Button 
            text="Lihat Berita" 
            onPress={() => navigation.navigate("ListNews")}/>
        
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
  text: {
    fontSize: 16,
  },
});
