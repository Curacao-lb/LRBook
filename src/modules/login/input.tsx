import { View, Image, TouchableOpacity, Text, TextInput, LayoutAnimation } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import icon_triangle from '@src/assets/icon_triangle.png'
import icon_eye_open from '@src/assets/icon_eye_open.png'
import icon_eye_close from '@src/assets/icon_eye_close.png'
import icon_exchange from '@src/assets/icon_exchange.png'
import icon_wx from '@src/assets/icon_wx.png'
import icon_qq from '@src/assets/icon_qq.webp'
import icon_close_modal from '@src/assets/icon_close_modal.png'

import { formatPhone, replaceBlank } from "@src/utils/stringUtil"

import { inputStyles } from "./styles"
import { useState } from "react";
import { ProtocolComponent } from "./quick";
import { request } from "@src/utils/request";

interface InputLoginProps {
  setPhone: (text: string) => void
  phone: string
  setLoginType: (type: 'quick' | 'input') => void
  check: boolean
  handleCheckProtocol: () => void
}

export default ({ phone, setPhone, setLoginType, check, handleCheckProtocol }: InputLoginProps) => {
  const [pwd, setPwd] = useState<string>('')
  const [eyeOpen, setEyeOpen] = useState<boolean>(false);
  const canLogin = phone?.length === 13 && pwd?.length === 6;
  const Navigation = useNavigation<StackNavigationProp<any>>()


  const onLoginPress = async () => {
    if (!canLogin) {
      return;
    }
    const purePhone = replaceBlank(phone)

    const params = {
      name: 'dagongjue',
      pwd: '123456'
    }

    const res = await request('login', params)
    console.log('res', res);


    console.log('purePhone', purePhone);
    Navigation.replace('Home')
  }

  return (
    <View style={inputStyles.root}>
      <Text style={inputStyles.pwdLogin}>密码登录</Text>
      <Text style={inputStyles.tip}>
        未注册的手机号登录成功后将自动注册
      </Text>
      <View style={inputStyles.phoneLayout}>
        <Text style={inputStyles.pre86}>+86</Text>
        <Image style={inputStyles.triangle} source={icon_triangle} />
        <TextInput
          style={inputStyles.phoneInput}
          placeholderTextColor="#bbb"
          placeholder='请输入手机号码'
          autoFocus={false}
          keyboardType='number-pad'
          maxLength={13}
          value={phone}
          onChangeText={(text: string) => {
            setPhone(formatPhone(text));
          }}
        />
      </View>

      <View style={inputStyles.pwdLayout}>
        <TextInput
          style={[inputStyles.phoneInput, inputStyles.pwdInput]}
          placeholderTextColor="#bbb"
          placeholder='输入密码'
          autoFocus={false}
          keyboardType='number-pad'
          maxLength={6}
          secureTextEntry={!eyeOpen}
          value={pwd}
          onChangeText={(text: string) => {
            setPwd(text);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            setEyeOpen(!eyeOpen)
          }}
        >
          <Image
            style={inputStyles.iconEye}
            source={eyeOpen ? icon_eye_open : icon_eye_close}
          />
        </TouchableOpacity>
      </View>

      <View style={inputStyles.changeLayout}>
        <Image style={inputStyles.exchangeIcon} source={icon_exchange} />
        <Text style={inputStyles.codeLoginTxt}>验证码登录</Text>
        <Text style={inputStyles.forgetPwdTxt}>忘记密码？</Text>
      </View>

      <TouchableOpacity
        activeOpacity={canLogin ? 0.7 : 1}
        style={canLogin ? inputStyles.loginButton : inputStyles.loginButtonDisable}
        onPress={onLoginPress}
      >
        <Text style={inputStyles.loginTxt}>登录</Text>
      </TouchableOpacity>
      {/* 协议组件 */}
      <View style={{ marginTop: 12 }}>
        <ProtocolComponent {...{ handleCheckProtocol, check }} />
      </View>
      <View style={inputStyles.wxqqLayout}>
        <Image style={inputStyles.iconWx} source={icon_wx} />
        <Image style={inputStyles.iconQQ} source={icon_qq} />
      </View>

      <TouchableOpacity
        style={inputStyles.closeButton}
        onPress={() => {
          LayoutAnimation.easeInEaseOut();
          setLoginType('quick')
        }}
      >
        <Image style={inputStyles.closeImg} source={icon_close_modal} />
      </TouchableOpacity>
    </View>
  )
}
