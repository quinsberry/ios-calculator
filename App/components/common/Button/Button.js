import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import styles from './styles'

const Button = ({ onPress, text, size, theme }) => {
  const buttonStyles = [styles.button]
  const textStyles = [styles.text]

  if (size === 'double') {
    buttonStyles.push(styles.buttonDouble)
  }

  if (theme === 'secondary') {
    buttonStyles.push(styles.buttonSecondary)
    textStyles.push(styles.textSecondary)
  } else if (theme === 'accent') {
    buttonStyles.push(styles.buttonAccent)
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button
