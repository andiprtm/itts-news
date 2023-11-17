import React, { PureComponent } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import * as Font from 'expo-font';
import { Separator } from "../components";

const windowWidth = Dimensions.get("window").width;

const poppinsMedium = require('../assets/fonts/Poppins-Medium.ttf');
const poppinsSemiBold = require('../assets/fonts/Poppins-SemiBold.ttf');
const poppinsBold = require('../assets/fonts/Poppins-Bold.ttf');

class ListNews extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
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

  async getNews() {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/dauditts/pm-static-api/main/articles.json"
      );
      const json = await response.json();
      this.setState({ data: json.articles });
    } catch (error) {
      console.error(error);
      this.props.navigation.navigate('Home');
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getNews();
    this.loadFonts();
  }

  renderItem = ({ item }) => {
    key = item.id
    const { navigation } = this.props;

    return (
      <>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate("NewsDetail", { data: item })}>

          <View style={styles.parent}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={{ alignSelf: "stretch"}}>
                <Text ellipsizeMode='tail' numberOfLines={1} style={styles.itemText}>{item.title}</Text>
                <Separator height={4}/>
                <Text ellipsizeMode='tail' numberOfLines={4} style={styles.itemDate}>Updated: {item.date}</Text>
                <Separator height={3}/>
                <Text ellipsizeMode='tail' numberOfLines={4} style={styles.itemContent}>{item.content}</Text>
                <Separator height={5}/>
            </View>
          </View>
          
        </TouchableOpacity>
        <View style={styles.itemBorder}></View>
      </>
    );
  };

  render() {
    const { data, isLoading } = this.state;

    if (this.state.fontsLoaded) {
        return (
            <View style={styles.container}>
              {isLoading ? (
                <ActivityIndicator size="large" color="#AA0002" />
              ) : (
                <FlatList
                  data={data}
                  keyExtractor={(item) => item.id}
                  renderItem={this.renderItem}
                />
              )}
            </View>
          );     
    }else{
        return null;
    }
  }
}

export default ListNews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  item: {
    paddingTop: 20,
    backgroundColor: "white",
  },
  itemBorder: {
    borderBottomWidth: 0.5,
    borderColor: "#cccccc",
  },
  itemImage: {
    width: "30%",
    height: "100%",
  },
  itemText: {
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    width: windowWidth - 150,
    marginLeft: 15,
  },
  itemContent: {
    fontFamily: "Poppins-Medium",
    fontSize: 13,
    width: windowWidth - 150,
    marginLeft: 15,
  },
  itemDate: {
    fontFamily: "Poppins-Medium",
    fontSize: 10,
    width: windowWidth - 150,
    marginLeft: 15,
  },
  parent:{
    flex: 1, 
    flexDirection: "row", 
    alignItems: "flex-start", 
    width: "100%", 
    overflow: "hidden", 
    justifyContent: "space-between", 
    paddingRight: "10%"
  }
});
