import { View, Image, StyleSheet } from "react-native";

import icon_main_logo from '@src/assets/icon_main_logo.png'
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export default () => {
  const Navigation = useNavigation<StackNavigationProp<any>>()
  useEffect(() => {
    setTimeout(() => {
      Navigation.replace('Login')
    }, 3000);
  }, [])

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