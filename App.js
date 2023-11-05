import React from "react";
import { Component } from "react";
import { StatusBar, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/home";
// import FunctionalComponent from "./screens/functional_components";
// import ClassComponent from "./screens/class_components";
import ListNews from "./screens/listNews";
// import NewsDetail from "./screens/news_detail";

const Stack = createNativeStackNavigator();

class App extends Component {
  headerStyle = {
    headerTitleStyle: { color: "white" },
    headerStyle: {
      backgroundColor: "#AA0002",
    },
    headerTintColor: "white",
  };

  render() {
    return (
      <NavigationContainer>
        <StatusBar style="auto" backgroundColor="#AA0002" />
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "",
              ...this.headerStyle,
            }}
          />

          {/* <Stack.Screen
            name="FunctionalComponent"
            component={FunctionalComponent}
            options={{
              title: "Functional Component",
              ...this.headerStyle,
            }}
          />

          <Stack.Screen
            name="ClassComponent"
            component={ClassComponent}
            options={{
              title: "Class Component",
              ...this.headerStyle,
            }}
          /> */}

          <Stack.Screen
            name="ListNews"
            component={ListNews}
            options={{
              title: "Daftar Berita",
              ...this.headerStyle,
            }}
          />

          {/* <Stack.Screen
            name="NewsDetail"
            component={NewsDetail}
            options={{
              title: "News Detail",
              ...this.headerStyle,
            }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
