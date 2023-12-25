import { quickStyles } from "./styles";
import { View, Image, TouchableOpacity, Text, Linking } from "react-native";
import icon_main_logo from '@src/assets/icon_main_logo.png'
import icon_unselected from '@src/assets/icon_unselected.png'
import icon_selected from '@src/assets/icon_selected.png'
import icon_arrow from '@src/assets/icon_arrow.png'
import icon_wx_small from '@src/assets/icon_wx_small.png'

interface QuickLoginProps {
  handleCheckProtocol: () => void
  check: boolean
  handleSwitchLoginType: () => void
}

export default ({ handleCheckProtocol, check, handleSwitchLoginType }: QuickLoginProps) => {
  return (
    <View style={quickStyles.root}>
      {/* 协议组件 */}
      <View style={quickStyles.protocol}>
        <TouchableOpacity onPress={handleCheckProtocol}>
          <Image source={check ? icon_selected : icon_unselected} style={quickStyles.radioButton} />
        </TouchableOpacity>
        <Text style={quickStyles.text}>我已阅读并同意</Text>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('https://www.baidu.com')
          }}
        >
          <Text style={quickStyles.protocolTxt}>《用户协议》和《隐私政策》</Text>
        </TouchableOpacity>
      </View>
      {/* 其他登录方式 */}
      <TouchableOpacity
        style={quickStyles.otherLoginButton}
        onPress={handleSwitchLoginType}
      >
        <Text style={quickStyles.otherLoginTxt}>其它登录方式</Text>
        <Image style={quickStyles.icon_arrow} source={icon_arrow} />
      </TouchableOpacity>
      {/* 微信登录 */}
      <TouchableOpacity
        style={quickStyles.wxLoginButton}
        activeOpacity={0.7}
      >
        <Image style={quickStyles.icon_wx} source={icon_wx_small} />
        <Text style={quickStyles.wxLoginTxt}>微信登录</Text>
      </TouchableOpacity>
      {/* 一键登录 */}
      <TouchableOpacity
        style={quickStyles.oneKeyLoginButton}
        activeOpacity={0.7}
      >
        <Text style={quickStyles.oneKeyLoginTxt}>一键登录</Text>
      </TouchableOpacity>
      <Image source={icon_main_logo} style={quickStyles.logoMain} />
    </View>
  )
}