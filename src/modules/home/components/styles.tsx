import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  titleLayout: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  icon: {
    width: 28,
    height: 28,
  },
  dailyButton: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 12,
    marginRight: 42,
  },
  searchButton: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 12,
    marginLeft: 42,
  },
  line: {
    width: 28,
    height: 2,
    backgroundColor: '#ff2442',
    borderRadius: 1,
    position: 'absolute',
    bottom: 6,
  },
  tabButton: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabTxt: {
    fontSize: 16,
    color: '#999',
  },
  tabTxtSelected: {
    fontSize: 17,
    color: '#333',
  },
})

export const categoryListStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: 36,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 6,
  },
  scrollView: {
    flex: 1,
    height: '100%',
  },
  openButton: {
    width: 40,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  openImg: {
    width: 18,
    height: 18,
    transform: [{ rotate: '-90deg' }]
  },
  tabItem: {
    width: 64,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabItemTxt: {
    fontSize: 16,
    color: '#999',
  },
  tabItemTxtSelected: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
})
