import { useState } from "react";
import { View, Image, LayoutAnimation } from "react-native";
import QuickLogin from './quick'
import InputLogin from './input'

import icon_main_logo from '@src/assets/icon_main_logo.png'

import { styles } from "./styles";

export default () => {
  const [loginType, setLoginType] = useState<'quick' | 'input'>('quick')
  const [check, setCheck] = useState<boolean>(false)

  const [phone, setPhone] = useState<string>('');

  const handleSwitchLoginType = () => {
    LayoutAnimation.easeInEaseOut();
    setLoginType('input')
  }

  const handleCheckProtocol = () => {
    setCheck(!check)
  }

  if (loginType === 'quick') {
    return (
      <QuickLogin {...{ handleCheckProtocol, handleSwitchLoginType, check }} />
    )
  }

  if (loginType === 'input') {
    return (
      <InputLogin {...{ phone, setPhone, setLoginType, handleCheckProtocol, check }} />
    )
  }

  return (
    <View style={styles.root}>
      {/* 比欢迎页小一点 */}
      <Image source={icon_main_logo} style={styles.logo} />
    </View>
  )
}
