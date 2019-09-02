import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

import Card from "../components/Card";

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenTitle}>Start a New Game!</Text>
      <Card styles={styles.inputContainer}>
        <Text>Select a Number:</Text>
        <TextInput style={styles.input} />
        <View style={styles.buttonContainer}>
          <Button title="Reset" />
          <Button title="Confirm" />
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 20
  },
  inputContainer: {
    alignItems: "center",
    width: "100%"
  },
  screenTitle: {
    fontSize: 22,
    marginBottom: 20
  },
  input: {
    width: 300,
    maxHeight: "80%",
    padding: 10,
    fontSize: 18,
    textAlign: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
    width: 300,
    justifyContent: "space-around"
  }
});
