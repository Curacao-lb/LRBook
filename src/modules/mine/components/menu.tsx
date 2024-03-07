import { View, Text, Modal, LayoutAnimation, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native'

import { menuStyles } from '../styles'
import { BOTTOM_MENUS, MENUS } from '../config'
import { remove } from '@src/store'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'

const { width: SCREEN_WIDTH } = Dimensions.get('window')
const ContentWidth = SCREEN_WIDTH * 0.75

const Content = ({ open, onMenuItemPress }: { open: boolean, onMenuItemPress: (item: any) => Promise<void> }) => {
  return (
    <View style={[menuStyles.content, { marginLeft: open ? 0 : -ContentWidth }]}>
      <ScrollView
        style={menuStyles.scrollView}
        contentContainerStyle={menuStyles.container}
        showsVerticalScrollIndicator={false}
      >
        {MENUS.map((item, index) => {
          return (
            <View key={`item-${index}`}>
              {item.map((subItem, subIndex) => (
                <TouchableOpacity
                  key={`subItem-${subIndex}`}
                  style={menuStyles.menuItem}
                  onPress={() => onMenuItemPress(subItem)}
                >
                  <Image style={menuStyles.menuItemIcon} source={subItem.icon} />
                  <Text style={menuStyles.menuItemTxt}>{subItem.name}</Text>
                </TouchableOpacity>
              ))}

              {index !== MENUS.length - 1 && <View style={menuStyles.divideLine} />}
            </View>
          )
        })}
      </ScrollView>
      <View style={menuStyles.bottomLayout}>
        {BOTTOM_MENUS.map(item => (
          <TouchableOpacity
            key={`${item.txt}`}
            style={menuStyles.bottomMenuItem}
          >
            <View style={menuStyles.bottomMenuIconWrap}>
              <Image style={menuStyles.bottomMenuIcon} source={item.icon} />
            </View>
            <Text style={menuStyles.bottomMenuTxt}>{item.txt}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

interface IMenu {
  setVisible: (visible: boolean) => void
  visible: boolean
  open: boolean
  setOpen: (open: boolean) => void
}

export default ({ setVisible, visible, open, setOpen }: IMenu) => {
  const navigation = useNavigation<StackNavigationProp<any>>()

  const hide = () => {
    LayoutAnimation.easeInEaseOut()
    setOpen(false)
    setTimeout(() => {
      setVisible(false)
    }, 300)
  }

  const onMenuItemPress = async (item: any): Promise<void> => {
    if (item.name === '退出登录') {
      hide()
      // 清除登录信息
      await remove('userInfo')
      // 重置，index表示去第几个页面栈，routes表示压几个进去
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }]
      })
    }
  }

  return (
    <Modal
      transparent={true}
      visible={visible}
      statusBarTranslucent={true}
      animationType='fade'
      onRequestClose={hide}
    >
      <TouchableOpacity
        style={menuStyles.root}
        onPress={hide}
        activeOpacity={1} // 去除 TouchableOpacity 的点击效果
      >
        <Content {...{ open, onMenuItemPress }} />
      </TouchableOpacity>
    </Modal>
  )
}
