import { Dimensions, StyleSheet } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const indexStyles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0'
  },
  flatList: {
    width: '100%',
    height: '100%',
  },
  container: {
    // paddingTop: 6,
  },
  item: {
    width: SCREEN_WIDTH - 18 >> 1, // 左右空 6px，中间空 6px，一共18px，>> 表示位运算相当于除以2
    backgroundColor: 'white',
    marginLeft: 6,
    marginBottom: 6,
    borderRadius: 8,
    overflow: 'hidden',
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
  footerTxt: {
    width: '100%',
    fontSize: 14,
    color: '#999',
    marginVertical: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  itemImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover'
  }
})