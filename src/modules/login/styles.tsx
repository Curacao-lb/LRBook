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