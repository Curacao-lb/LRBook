import { useState } from "react";
import { View, Image } from "react-native";
import QuickLogin from './quick'

import icon_main_logo from '@src/assets/icon_main_logo.png'

import { styles } from "./styles";

export default () => {
  const [loginType, setLoginType] = useState<'quick' | 'input'>('quick')
  const [check, setCheck] = useState<boolean>(false)

  if (loginType === 'quick') {
    const handleCheckProtocol = () => {
      setCheck(!check)
    }

    const handleSwitchLoginType = () => {
      setLoginType('input')
    }

    return (
      <QuickLogin {...{ handleCheckProtocol, handleSwitchLoginType, check }} />
    )
  }

  return (
    <View style={styles.root}>
      {/* 比欢迎页小一点 */}
      <Image source={icon_main_logo} style={styles.logo} />
    </View>
  )
}

