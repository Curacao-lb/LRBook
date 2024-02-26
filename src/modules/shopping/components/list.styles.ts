import { Dimensions, StyleSheet } from 'react-native'

const { width: SCREEN_WIDTH } = Dimensions.get('window')
const ITEM_WIDTH = SCREEN_WIDTH - 18 >> 1;

export const searchGoodsStyles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent', // 无缝切换效果
  },
  backButton: {
    height: '100%',
    paddingLeft: 16,
    justifyContent: 'center',
  },
  backImg: {
    width: 20,
    height: 20,
  },
  titleLayout: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  searchLayout: {
    height: 32,
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginLeft: 16,
  },
  searchIcon: {
    width: 18,
    height: 18,
  },
  searchTxt: {
    fontSize: 14,
    color: '#bbb',
    marginLeft: 6,
    paddingHorizontal: 8,
    paddingVertical: 0,
  },
  menuIcon: {
    width: 22,
    height: 22,
    marginHorizontal: 6,
  },
  searchBotton: {
    fontSize: 16,
    color: '#666',
    marginHorizontal: 12,
  },
})

export const listHeaderStyles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  categoryItem: {
    width: '20%',
    alignItems: 'center',
    paddingVertical: 16,
  },
  itemImg: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  itemNameTxt: {
    fontSize: 14,
    color: '#333',
    marginTop: 6,
  },
})

export default StyleSheet.create({
  item: {
    width: ITEM_WIDTH,
    borderRadius: 8,
    overflow: 'hidden',
    marginLeft: 6,
    marginTop: 6,
  },
  img: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  titleTxt: {
    fontSize: 14,
    color: '#333',
    marginTop: 6,
  },
  prefix: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    marginTop: 4,
  },
  priceTxt: {
    fontSize: 22,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'justify',
  },
  originTxt: {
    fontSize: 13,
    color: '#999',
    fontWeight: 'normal',
  },
  promotionTxt: {
    width: 78,
    fontSize: 12,
    color: '#999',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#bbb',
    textAlign: 'center',
    marginTop: 4,
  },
})
