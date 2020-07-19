import React from 'react'
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native'

import { Row, Button } from './components/common'
import { calculator } from './utils'

const App = () => {
  const [currentValue, setCurrentValue] = React.useState('0')
  const [operator, setOperator] = React.useState(null)
  const [previousValue, setPreviousValue] = React.useState(null)
  const handleTap = (type, value) => {
    calculator(
      type,
      value,
      { currentValue, operator, previousValue },
      { setCurrentValue, setOperator, setPreviousValue },
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Text style={styles.value}>{parseFloat(currentValue).toLocaleString()}</Text>
        <Row>
          <Button
            theme="secondary"
            onPress={() => handleTap('clear')}
            text={currentValue === '0' ? 'AC' : 'C'}
          />
          <Button theme="secondary" onPress={() => handleTap('posneg')} text="+/-" />
          <Button theme="secondary" onPress={() => handleTap('percentage')} text="%" />
          <Button theme="accent" onPress={() => handleTap('operator', '/')} text="/" />
        </Row>
        <Row>
          <Button onPress={() => handleTap('num', 7)} text="7" />
          <Button onPress={() => handleTap('num', 8)} text="8" />
          <Button onPress={() => handleTap('num', 9)} text="9" />
          <Button theme="accent" onPress={() => handleTap('operator', '*')} text="*" />
        </Row>
        <Row>
          <Button onPress={() => handleTap('num', 4)} text="4" />
          <Button onPress={() => handleTap('num', 5)} text="5" />
          <Button onPress={() => handleTap('num', 6)} text="6" />
          <Button theme="accent" onPress={() => handleTap('operator', '-')} text="-" />
        </Row>
        <Row>
          <Button onPress={() => handleTap('num', 1)} text="1" />
          <Button onPress={() => handleTap('num', 2)} text="2" />
          <Button onPress={() => handleTap('num', 3)} text="3" />
          <Button theme="accent" onPress={() => handleTap('operator', '+')} text="+" />
        </Row>
        <Row>
          <Button size="double" onPress={() => handleTap('num', 0)} text="0" />
          <Button onPress={() => handleTap('num', '.')} text="." />
          <Button theme="accent" onPress={() => handleTap('equal')} text="=" />
        </Row>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(32,32,32, 1)',
    justifyContent: 'flex-end',
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
  },
  value: {
    color: '#fff',
    fontSize: 50,
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 10,
  },
})

export default App
