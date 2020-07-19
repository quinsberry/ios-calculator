import { StyleSheet, Dimensions } from 'react-native'

const screen = Dimensions.get('window')
const buttonWidth = (screen.width - 10) / 4

export default StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 30,
  },
  textSecondary: {
    color: '#060606',
  },
  button: {
    flex: 1,
    backgroundColor: '#333333',
    height: Math.floor(buttonWidth - 10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Math.floor(buttonWidth - 10) / 2,
    margin: 5,
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: 'flex-start',
    paddingLeft: 40,
  },
  buttonSecondary: {
    backgroundColor: '#a6a6a6',
  },
  buttonAccent: {
    backgroundColor: '#f09a36',
  },
})
