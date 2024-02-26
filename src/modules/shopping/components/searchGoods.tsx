import { useEffect, useRef, useState } from 'react'
import { View, TouchableOpacity, Image, TextInput, Text, LayoutAnimation } from 'react-native'

import icon_arrow from '@src/assets/icon_arrow.png'
import icon_search from '@src/assets/icon_search.png'

import { searchGoodsStyles as styles } from './list.styles'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'

export default () => {
  const inputRef = useRef<TextInput>(null)
  const [showBack, setShowBack] = useState<boolean>(false)
  const navigation = useNavigation<StackNavigationProp<any>>()

  useEffect(() => {
    setTimeout(() => {
      LayoutAnimation.easeInEaseOut() // 箭头出现动画
      setShowBack(true)
      inputRef.current?.focus() // 自动聚焦
    }, 100)
  }, [])

  const onBackPress = () => {
    LayoutAnimation.easeInEaseOut() // 箭头消失动画
    setShowBack(false)
    inputRef.current?.blur()  // 自动失焦
    setTimeout(() => {
      navigation.pop()
    }, 300)
  }

  return (
    <View style={styles.titleLayout}>
      {showBack && <TouchableOpacity
        style={styles.backButton}
        onPress={onBackPress}
      >
        <Image style={styles.backImg} source={icon_arrow} />
      </TouchableOpacity>}
      <View style={styles.searchLayout}
      >
        <Image style={styles.searchIcon} source={icon_search} />
        <TextInput
          ref={inputRef}
          style={styles.searchTxt}
          placeholder='纯粮小麦粉'
          placeholderTextColor='#bbb'
        />
      </View>

      <Text style={styles.searchBotton}>搜索</Text>
    </View>
  )
}