import { Dimensions, StyleSheet } from 'react-native'

const { width: SCREEN_WIDTH } = Dimensions.get('window')

export const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  bgImg: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 400,
  },
  scrollView: {
    width: '100%',
    flex: 1,
  }
})

export const titleStyles = StyleSheet.create({
  titleLayout: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    height: '100%',
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  menuImg: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  rightMenuImg: {
    marginHorizontal: 12,
    tintColor: 'white',
  }
})

export const infoStyles = StyleSheet.create({
  avatarLayout: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 16,
  },
  avatarImg: {
    width: 96,
    height: 96,
    resizeMode: 'cover',
    borderRadius: 48,
  },
  addImg: {
    width: 28,
    height: 28,
    marginLeft: -28,
    marginBottom: 2,
  },
  nameLayout: {
    marginLeft: 20,
  },
  nameTxt: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  idLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 20,
  },
  idTxt: {
    fontSize: 12,
    color: '#bbb',
  },
  qrcodeImg: {
    width: 12,
    height: 12,
    marginLeft: 6,
    tintColor: '#bbb'
  },
  descTxt: {
    fontSize: 14,
    color: 'white',
    paddingHorizontal: 16,
  },
  sexLayout: {
    width: 32,
    height: 24,
    backgroundColor: '#ffffff50',
    borderRadius: 12,
    marginTop: 12,
    marginLeft: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sexImg: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
  },
  infoLayout: {
    width: '100%',
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 28,
  },
  infoItem: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  infoValue: {
    fontSize: 18,
    color: 'white',
  },
  infoLabel: {
    fontSize: 12,
    color: '#ddd',
    marginTop: 6,
  },
  infoButton: {
    height: 32,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
  editTxt: {
    fontSize: 14,
    color: '#ffffff'
  },
  settingImg: {
    width: 20,
    height: 20,
    tintColor: '#ffffff'
  },
})

export const tabsStyles = StyleSheet.create({
  titleLayout: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  icon: {
    width: 28,
    height: 28,
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
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
  },
  tabTxt: {
    fontSize: 17,
    color: '#999',
  },
  tabTxtSelected: {
    fontSize: 17,
    color: '#333',
  },
})

export const listStyles = StyleSheet.create({
  listContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
  },
  item: {
    width: SCREEN_WIDTH - 18 >> 1,
    backgroundColor: 'white',
    marginLeft: 6,
    marginBottom: 6,
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: 8,
  },
  titleTxt: {
    fontSize: 14,
    color: '#333',
    marginHorizontal: 10,
    marginVertical: 4,
  },
  nameLayout: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  avatarImg: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  nameTxt: {
    fontSize: 12,
    color: '#999',
    marginLeft: 6,
    flex: 1,
  },
  heart: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  countTxt: {
    fontSize: 14,
    color: '#999',
    marginLeft: 4,
  },
  itemImg: {
    width: SCREEN_WIDTH - 18 >> 1,
    height: 240,
  },
})