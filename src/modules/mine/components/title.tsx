import { View, TouchableOpacity, Image } from 'react-native'
import { titleStyles } from '../styles'

import icon_menu from '@src/assets/icon_menu.png'
import icon_shop_car from '@src/assets/icon_shop_car.png'
import icon_share from '@src/assets/icon_share.png'

export default () => {
  return (
    <View style={titleStyles.titleLayout}>
      <TouchableOpacity
        style={titleStyles.menuButton}
      // onPress={() => {
      //   sideMenuRef.current?.show();
      // }}
      >
        <Image style={titleStyles.menuImg} source={icon_menu} />
      </TouchableOpacity>
      <View style={{ flex: 1 }} />
      <Image style={[titleStyles.menuImg, titleStyles.rightMenuImg]} source={icon_shop_car} />
      <Image style={[titleStyles.menuImg, titleStyles.rightMenuImg]} source={icon_share} />
    </View>
  )
}
