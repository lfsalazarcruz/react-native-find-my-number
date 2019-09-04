import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

import Colors from "../constants/colors";

const MainButton = props => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30
  },
  text: {
    color: "#fff",
    fontSize: 18
  }
});
