import React, { Component } from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home, ListNews, NewsDetail } from "./screens";

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

          <Stack.Screen
            name="ListNews"
            component={ListNews}
            options={{
              title: "Daftar Berita",
              ...this.headerStyle,
            }}
          />

          <Stack.Screen
            name="NewsDetail"
            component={NewsDetail}
            options={{
              title: "Detail Berita",
              ...this.headerStyle,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
