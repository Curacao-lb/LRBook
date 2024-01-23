import { StyleSheet } from "react-native"

export const quickStyles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    flexDirection: 'column-reverse',
    alignItems: 'center',
    paddingHorizontal: 56
  },
  protocol: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  radioButton: {
    width: 20,
    height: 20,
  },
  text: {
    fontSize: 12,
    color: '#999',
    marginLeft: 6
  },
  protocolTxt: {
    fontSize: 12,
    color: '#1020ff',
  },
  otherLoginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginBottom: 100,
  },
  otherLoginTxt: {
    fontSize: 16,
    color: '#303080'
  },
  icon_arrow: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginLeft: 6,
    transform: [{ rotate: '180deg', }]
  },
  wxLoginButton: {
    width: '100%',
    height: 56,
    backgroundColor: '#05c160',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon_wx: {
    width: 40,
    height: 40,
  },
  wxLoginTxt: {
    fontSize: 18,
    color: 'white',
    marginLeft: 6,
  },
  oneKeyLoginButton: {
    width: '100%',
    height: 56,
    backgroundColor: '#ff2442',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  oneKeyLoginTxt: {
    fontSize: 18,
    color: 'white',
    marginLeft: 6,
  },
  logoMain: {
    width: 180,
    height: 95,
    resizeMode: 'contain',
    position: 'absolute',
    top: 170,
  },
})

export const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'column',
  },
  logo: {
    width: 200,
    height: 110,
    marginTop: 200,
    resizeMode: 'contain'
  }
})

export const inputStyles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 48,
  },
  pwdLogin: {
    fontSize: 28,
    color: '#333',
    fontWeight: 'bold',
    marginTop: 56,
  },
  tip: {
    fontSize: 14,
    color: '#bbb',
    marginTop: 6,
  },
  phoneLayout: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginTop: 28,
  },
  pre86: {
    fontSize: 24,
    color: '#bbb',
  },
  triangle: {
    width: 12,
    height: 6,
    marginLeft: 6,
  },
  phoneInput: {
    flex: 1,
    height: 60,
    backgroundColor: 'transparent',
    textAlign: 'left',
    textAlignVertical: 'center',
    fontSize: 24,
    color: '#333',
    marginLeft: 16,
  },
  pwdLayout: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginTop: 8,
  },
  pwdInput: {
    marginLeft: 0,
    marginRight: 16,
  },
  iconEye: {
    width: 30,
    height: 30,
  },
  changeLayout: {
    width: '100%',
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  exchangeIcon: {
    width: 16,
    height: 16,
  },
  codeLoginTxt: {
    fontSize: 14,
    color: '#303080',
    flex: 1,
    marginLeft: 4,
  },
  forgetPwdTxt: {
    fontSize: 14,
    color: '#303080',
  },
  loginButton: {
    width: '100%',
    height: 56,
    backgroundColor: '#ff2442',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
    marginTop: 20,
  },
  loginButtonDisable: {
    width: '100%',
    height: 56,
    backgroundColor: '#DDDDDD',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
    marginTop: 20,
  },
  loginTxt: {
    fontSize: 20,
    color: 'white',
  },
  wxqqLayout: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 54,
    justifyContent: 'center',
  },
  iconWx: {
    width: 50,
    height: 50,
    marginRight: 60,
  },
  iconQQ: {
    width: 50,
    height: 50,
    marginLeft: 60,
  },
  closeButton: {
    position: 'absolute',
    left: 36,
    top: 24,
  },
  closeImg: {
    width: 28,
    height: 28,
  },
})
