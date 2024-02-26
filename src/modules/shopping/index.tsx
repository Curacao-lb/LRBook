import shoppingStore from '@src/store/shoppingStore'
import { useEffect } from 'react'
import { View } from 'react-native'
import styles from './styles'
import Title from './components/title'
import List from './components/list'

export default () => {
  const { setShoppingList, setTopTenCategoryList } = shoppingStore((state) => state)

  useEffect(() => {
    setShoppingList()
    setTopTenCategoryList()
  }, [])

  return (
    <View style={styles.root}>
      <Title />
      <List />
    </View>
  )
}
