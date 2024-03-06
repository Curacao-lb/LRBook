import { Image, View } from 'react-native'
import { styles } from './styles'

import icon_mine_bg from '@src/assets/icon_mine_bg.png'
import Title from './components/title'
import { useEffect, useState } from 'react'
import List from './components/list'
import mineStore from '@src/store/mineStore'

export default () => {
  const [bgImgHeight, setBgImgHeight] = useState<number>(400)
  const { setList } = mineStore((state: any) => state)

  useEffect(() => {
    setList()
  }, [])

  return (
    <View style={styles.root}>
      <Image
        style={[styles.bgImg, { height: bgImgHeight + 64 }]}
        source={icon_mine_bg}
      />
      <Title />
      <List {...{ setBgImgHeight }} />
    </View>
  )
}