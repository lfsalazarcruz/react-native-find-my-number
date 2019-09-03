import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Color from "../constants/colors";

const NumberContainer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 15,
    borderColor: Color.secondary,
    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  text: { fontSize: 22, color: Color.secondary, textAlign: "center" }
});
