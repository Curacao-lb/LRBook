import { Image, View } from 'react-native'
import { styles } from './styles'

import icon_mine_bg from '@src/assets/icon_mine_bg.png'
import Title from './components/title'
import { useEffect, useState } from 'react'
import List from './components/list'
import mineStore from '@src/store/mineStore'
import Menu from './components/menu'

export default () => {
  const [bgImgHeight, setBgImgHeight] = useState<number>(400)
  const [visible, setVisible] = useState<boolean>(false) // 控制显隐
  const [open, setOpen] = useState<boolean>(false) // 控制位置

  const { setList } = mineStore((state: any) => state)

  useEffect(() => {
    setList()
  }, [])

  const openMenu = () => {
    setOpen(true)
    setVisible(true)
  }

  return (
    <View style={styles.root}>
      <Image
        style={[styles.bgImg, { height: bgImgHeight + 64 }]}
        source={icon_mine_bg}
      />
      <Title {...{ openMenu }} />
      <List {...{ setBgImgHeight }} />
      <Menu {...{ setVisible, visible, open, setOpen }} />
    </View>
  )
}
