import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "#3055C0",
    alignItems: "center",
    justifyContent: "flex-end",
    height: 90
  },
  headerTitle: {
    fontSize: 18,
    marginBottom: 15,
    color: "white"
  }
});
