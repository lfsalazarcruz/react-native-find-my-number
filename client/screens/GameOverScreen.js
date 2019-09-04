import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import Title from "../components/Title";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Title style={styles.title}>The Game is Over!</Title>
      <Text>Number of rounds: {props.roundGuesses}</Text>
      <Text>Number was: {props.userNumber}</Text>
      <Button title={"RESTART"} onPress={props.onRestartGame} />
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },
  title: {
    marginBottom: 20
  }
});
