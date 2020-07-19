const handleEqual = (state, setState) => {
  const { currentValue, previousValue, operator } = state
  const { setOperator, setPreviousValue, setCurrentValue } = setState

  const current = parseFloat(currentValue)
  const previous = parseFloat(previousValue)
  const resetState = () => {
    setOperator(null)
    setPreviousValue(null)
  }

  if (operator === '/') {
    setCurrentValue(previous / current)
    resetState()
  } else if (operator === '*') {
    setCurrentValue(previous * current)
    resetState()
  } else if (operator === '+') {
    setCurrentValue(previous + current)
    resetState()
  } else if (operator === '-') {
    setCurrentValue(previous - current)
    resetState()
  }
}

export default (type, value, state, setState) => {
  const { currentValue, operator, previousValue } = state
  const { setCurrentValue, setOperator, setPreviousValue } = setState

  switch (type) {
    case 'num':
      if (currentValue === '0') {
        return setCurrentValue(`${value}`)
      }
      setCurrentValue(`${currentValue}${value}`)
      break

    case 'operator':
      setOperator(value)
      setPreviousValue(currentValue)
      setCurrentValue(0)
      break

    case 'equal':
      handleEqual(state, setState)
      break

    case 'clear':
      setCurrentValue('0')
      setOperator(null)
      setPreviousValue(null)
      break

    case 'posneg':
      setCurrentValue(`${parseFloat(currentValue) * -1}`)
      break

    case 'percentage':
      setCurrentValue(`${parseFloat(currentValue) * 0.01}`)
      break

    default:
      return null
  }
}
