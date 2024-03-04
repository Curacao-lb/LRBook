import { useEffect, useState } from 'react'
import { View } from 'react-native'

import messageStore from '@src/store/messageStore'
import styles from './styles'
import Title from './components/title'
import List from './components/list'
import Menu from './components/menu'

export default () => {
  const { setMessageList, setRequestUnReadList, messageList, unReadList } = messageStore((state) => state)

  const [visible, setVisible] = useState<boolean>(false)
  const [y, setY] = useState<number>(100)

  useEffect(() => {
    setMessageList()
    setRequestUnReadList()
  }, [])

  return (
    <View style={styles.root}>
      <Title {...{ setY, setVisible }} />
      <List {...{ messageList, unReadList }} />
      <Menu {...{ visible, setVisible, setY, y }} />
    </View>
  )
}
