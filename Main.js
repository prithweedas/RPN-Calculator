import React from "react"
import { StyleSheet, Text, View, StatusBar } from "react-native"
import { Constants } from "expo"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import Button from "./Button"
import { pressNum, enter, backSpace, operation, clear } from "./reducer"

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <View style={styles.top}>
          <Text style={styles.number}>{this.props.stack[2] || 0}</Text>
          <Text style={styles.number}>{this.props.stack[1] || 0}</Text>
          <Text style={styles.number}>{this.props.stack[0] || 0}</Text>
        </View>
        <View style={styles.bottom}>
          <View style={styles.row}>
            <Button onPress={this.props.clear} text="clear" />
            <Button onPress={this.props.operation} text="pow" />
            <Button onPress={this.props.backSpace} text="<-" />
            <Button onPress={this.props.operation} text="/" />
          </View>
          <View style={styles.row}>
            <Button onPress={this.props.pressNum} text="7" />
            <Button onPress={this.props.pressNum} text="8" />
            <Button onPress={this.props.pressNum} text="9" />
            <Button onPress={this.props.operation} text="*" />
          </View>
          <View style={styles.row}>
            <Button onPress={this.props.pressNum} text="4" />
            <Button onPress={this.props.pressNum} text="5" />
            <Button onPress={this.props.pressNum} text="6" />
            <Button onPress={this.props.operation} text="-" />
          </View>
          <View style={styles.row}>
            <Button onPress={this.props.pressNum} text="1" />
            <Button onPress={this.props.pressNum} text="2" />
            <Button onPress={this.props.pressNum} text="3" />
            <Button onPress={this.props.operation} text="+" />
          </View>
          <View style={styles.row}>
            <Button onPress={this.props.pressNum} text="." />
            <Button onPress={this.props.pressNum} text="0" />
            <Button special onPress={this.props.enter} text="enter" />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  statusBar: {
    backgroundColor: "#C2185B",
    height: Constants.statusBarHeight
  },
  top: {
    backgroundColor: "blue"
  },
  bottom: {
    flex: 1
  },
  number: {
    color: "#fff",
    backgroundColor: "#414141",
    textAlign: "right",
    fontSize: 35,
    fontWeight: "600",
    padding: 5,
    borderBottomWidth: 1,
    borderColor: "#eee"
  },
  row: {
    flexDirection: "row",
    flex: 1
  }
})

const mapStateToProps = store => ({
  stack: store.stack,
  inputState: store.inputState
})

const mapActionToProps = dispatch =>
  bindActionCreators(
    {
      pressNum,
      enter,
      backSpace,
      operation,
      clear
    },
    dispatch
  )

export default connect(mapStateToProps, mapActionToProps)(App)
