import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import Title from "../components/Title";
import MainButton from "../components/MainButton";
import Color from "../constants/colors";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Title>The Game is Over!</Title>
      <View style={styles.resultText}>
        <Text style={styles.gameOverText}>
          Your phone needed{" "}
          <Text style={styles.number}>{props.roundGuesses}</Text> rounds to
          guess the number <Text style={styles.number}>{props.userNumber}</Text>
          .
        </Text>
      </View>
      <MainButton onPress={props.onRestartGame}>RESTART</MainButton>
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
  resultText: {
    margin: 20
  },
  gameOverText: {
    fontSize: 20
  },
  number: {
    color: Color.primary
  }
});
