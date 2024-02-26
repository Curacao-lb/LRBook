import { View, TouchableOpacity, Image, Text } from 'react-native'

import styles from '../styles'

import icon_search from '@src/assets/icon_search.png';
import icon_shop_car from '@src/assets/icon_shop_car.png';
import icon_orders from '@src/assets/icon_orders.png';
import icon_menu_more from '@src/assets/icon_menu_more.png';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export default () => {
  const navigation = useNavigation<StackNavigationProp<any>>()

  const onSearchPress = () => {
    navigation.push('SearchGoods');
  }

  return (
    <View style={styles.titleLayout}>
      <TouchableOpacity
        style={styles.searchLayout}
        onPress={onSearchPress}
      >
        <Image style={styles.searchIcon} source={icon_search} />
        <Text style={styles.searchTxt}>尝试搜点儿什么~</Text>
      </TouchableOpacity>
      <Image style={styles.menuIcon} source={icon_shop_car} />
      <Image style={styles.menuIcon} source={icon_orders} />
      <Image style={styles.menuIcon} source={icon_menu_more} />
    </View>
  )
}
