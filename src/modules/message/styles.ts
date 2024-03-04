import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white'
  },
  titleLayout: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleTxt: {
    fontSize: 18,
    color: '#333',
  },
  groupButton: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 16,
  },
  iconGroup: {
    width: 16,
    height: 16,
  },
  groupTxt: {
    fontSize: 14,
    color: '#333',
    marginRight: 6,
  },
})
