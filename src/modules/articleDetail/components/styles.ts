import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  commentsCountTxt: {
    fontSize: 14,
    color: '#666',
    marginTop: 20,
    marginLeft: 16,
  },
  inputLayout: {
    width: '100%',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userAvatarImg: {
    width: 32,
    height: 32,
    borderRadius: 16,
    resizeMode: 'cover',
  },
  commentInput: {
    flex: 1,
    height: 32,
    borderRadius: 16,
    marginLeft: 12,
    backgroundColor: '#f0f0f0',
    fontSize: 14,
    color: '#333',
    textAlignVertical: 'center',
    paddingVertical: 0,
    paddingHorizontal: 12,
  },
  commentsContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
  },
  commentItem: {
    width: '100%',
    flexDirection: 'row',
  },
  cAvatar: {
    width: 36,
    height: 36,
    resizeMode: 'cover',
    borderRadius: 18,
  },
  contentLayout: {
    flex: 1,
    marginHorizontal: 12,
  },
  nameTxt: {
    fontSize: 12,
    color: '#999',
  },
  messageTxt: {
    fontSize: 14,
    color: '#333',
    marginTop: 6,
  },
  timeLocationTxt: {
    fontSize: 12,
    color: '#bbb',
  },
  countLayout: {
    alignItems: 'center',
  },
  fCount: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  divider: {
    marginLeft: 50,
    marginRight: 0,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#eee',
    marginVertical: 16,
  }
})
