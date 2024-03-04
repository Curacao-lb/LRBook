import { Modal, TouchableOpacity, View, Text, Image } from 'react-native'

import { menuStyles } from './styles'

import icon_group from '@src/assets/icon_group.png'
import icon_create_group from '@src/assets/icon_create_group.png'

const Menus = ({ y }: { y: number }): JSX.Element => {
  return (
    <View style={[menuStyles.content, { top: y }]}>
      <TouchableOpacity
        style={menuStyles.menuItem}
      >
        <Image style={menuStyles.menuIcon} source={icon_group} />
        <Text style={menuStyles.menuTxt}>群聊广场</Text>
      </TouchableOpacity>

      <View style={menuStyles.line} />

      <TouchableOpacity
        style={menuStyles.menuItem}
      >
        <Image style={menuStyles.menuIcon} source={icon_create_group} />
        <Text style={menuStyles.menuTxt}>创建群聊</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ({ visible, setVisible, y }: { visible: boolean, setVisible: (visible: boolean) => void, y: number }) => {
  const hide = (): void => {
    setVisible(false)
  }

  return (
    <Modal
      transparent={true}
      visible={visible}
      statusBarTranslucent={true}
      animationType='fade'
      onRequestClose={hide}
    >
      <TouchableOpacity style={menuStyles.root} onPress={hide}>
        <Menus {...{ y }} />
      </TouchableOpacity>
    </Modal>
  )
}