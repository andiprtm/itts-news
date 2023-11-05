import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const LineSeparator = (props) => {
  return(
    <View style={{ height: props.height, width: windowWidth }}>
        <View style={styles.lineStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
    lineStyle:{
        borderWidth: 0.5,
        borderColor:'black',
   }
})
export default LineSeparator;
