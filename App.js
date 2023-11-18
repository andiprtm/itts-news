import React, { Component } from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home, ListNews, NewsDetail } from "./screens";
import { NativeBaseProvider } from 'native-base';

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
      <NativeBaseProvider>
          <NavigationContainer>
        <StatusBar style="auto" backgroundColor="#AA0002" />
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "",
              headerShown: false,
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
      </NativeBaseProvider>
    );
  }
}

export default App;
