import { View, Image, StyleSheet } from "react-native";

import icon_main_logo from '@src/assets/icon_main_logo.png'
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { load } from "@src/store";

export default () => {
  const Navigation = useNavigation<StackNavigationProp<any>>()
  useEffect(() => {
    setTimeout(() => {
      getUserInfo()
    }, 2000);
  }, [])

  const getUserInfo = async () => {
    const cachedUserInfo = await load('userInfo')
    if (cachedUserInfo) {
      Navigation.replace('Home')
    } else {
      Navigation.replace('Login')
    }
  }

  return (
    <View style={styles.root}>
      <Image source={icon_main_logo} style={styles.logo} />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'column'
  },
  logo: {
    width: 200,
    height: 110,
    marginTop: 200,
    resizeMode: 'contain'
  }
})