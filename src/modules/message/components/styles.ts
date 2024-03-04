import { StyleSheet } from 'react-native'

export const itemStyles = StyleSheet.create({
  item: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  avatarImg: {
    width: 48,
    height: 48,
    borderRadius: 24,
    resizeMode: 'cover',
  },
  contentLayout: {
    flex: 1,
    marginHorizontal: 12,
  },
  nameTxt: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
  lastMessageTxt: {
    fontSize: 15,
    color: '#999',
    marginTop: 4,
  },
  rightLayout: {
    alignItems: 'flex-end',
  },
  timeTxt: {
    fontSize: 12,
    color: '#999',
  },
  iconTop: {
    width: 8,
    height: 16,
    marginTop: 6,
    resizeMode: 'contain',
  },
})

export const headerStyles = StyleSheet.create({
  headerLayout: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    paddingVertical: 20,
  },
  headerItem: {
    flex: 1,
    alignItems: 'center',
  },
  itemImg: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  itemTxt: {
    fontSize: 16,
    color: '#333',
    marginTop: 8,
  },
  txt: {
    position: 'absolute',
    top: -6,
    right: -10,
    backgroundColor: '#ff2442',
    paddingHorizontal: 8,
    height: 24,
    borderRadius: 12,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 12,
    color: 'white',
  }
})

export const menuStyles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#00000040',
  },
  content: {
    width: 170,
    backgroundColor: 'white',
    borderRadius: 16,
    position: 'absolute',
    right: 10,
  },
  menuItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    paddingLeft: 20,
  },
  menuIcon: {
    width: 28,
    height: 28,
  },
  menuTxt: {
    fontSize: 18,
    color: '#333',
    marginLeft: 10,
  },
  line: {
    marginLeft: 20,
    marginRight: 16,
    height: 1,
    backgroundColor: '#eee',
  },
})
