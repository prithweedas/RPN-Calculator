import React from "react"
import { View, TouchableHighlight, Text, StyleSheet } from "react-native"

const baseContainer = {
  alignItems: "center",
  justifyContent: "center"
}

const Button = ({ text, special, onPress }) => (
  <TouchableHighlight
    underlayColor={special ? "#fff" : "#C2185B"}
    onPress={() => onPress(text || null)}
    style={special ? styles.specialContainer : styles.container}
  >
    <Text style={special ? styles.specialText : styles.text}>{text}</Text>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...baseContainer
  },
  specialContainer: {
    flex: 2,
    backgroundColor: "#C2185B",
    ...baseContainer
  },
  text: {
    fontSize: 30
  },
  specialText: {
    fontSize: 30,
    color: "#fff"
  }
})

export default Button
