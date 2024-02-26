import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  titleLayout: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  searchLayout: {
    height: 32,
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  searchIcon: {
    width: 18,
    height: 18,
  },
  searchTxt: {
    fontSize: 14,
    color: '#bbb',
    marginLeft: 6,
  },
  menuIcon: {
    width: 22,
    height: 22,
    marginHorizontal: 6,
  },
})
