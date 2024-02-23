import { StyleSheet } from "react-native"

export default StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  titleLayout: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    paddingHorizontal: 16,
    height: '100%',
    justifyContent: 'center',
  },
  backImg: {
    width: 20,
    height: 20,
  },
  avatarImg: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  userNameTxt: {
    fontSize: 15,
    flex: 1,
    color: '#333',
    marginLeft: 16,
  },
  followTxt: {
    paddingHorizontal: 16,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ff2442',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 12,
    color: '#ff2442',
  },
  shareImg: {
    width: 28,
    height: 28,
    marginHorizontal: 16,
  },
  activeDot: {
    width: 6,
    height: 6,
    backgroundColor: '#ff2442',
    borderRadius: 3,
  },
  inActiveDot: {
    width: 6,
    height: 6,
    backgroundColor: '#c0c0c0',
    borderRadius: 3,
  },
  articleTitleTxt: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
    paddingHorizontal: 16,
  },
  descTxt: {
    fontSize: 15,
    color: '#333',
    marginTop: 6,
    paddingHorizontal: 16,
  },
  tagsTxt: {
    fontSize: 15,
    color: '#305090',
    marginTop: 6,
    paddingHorizontal: 16,
  },
  timeAndLocationTxt: {
    fontSize: 12,
    color: '#bbb',
    marginVertical: 16,
    marginLeft: 16,
  },
  line: {
    marginHorizontal: 16,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#eee',
  },
  bottomLayout: {
    width: '100%',
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  bottomEditLayout: {
    height: 40,
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginRight: 12,
  },
  editImg: {
    width: 20,
    height: 20,
    tintColor: '#333',
  },
  bottomCommentInput: {
    height: '100%',
    fontSize: 16,
    color: '#333',
    textAlignVertical: 'center',
    paddingVertical: 0,
  },
  bottomCount: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  bottomIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginLeft: 12,
  },
})