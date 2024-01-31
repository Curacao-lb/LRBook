import { useEffect, useState } from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  Image
} from 'react-native'

import icon_daily from '@src/assets/icon_daily.png'
import icon_search from '@src/assets/icon_search.png'

import { styles } from './styles'

export default ({ tab = 0, onTabChanged }: { tab?: number, onTabChanged?: (tab: number) => void }) => {
  const [tabIndex, setTabIndex] = useState<number>(1)

  useEffect(() => {
    setTabIndex(tab)
  }, [tab])

  const handleSetTab = (index: number): void => {
    setTabIndex(index)
    onTabChanged?.(index)
  }

  return (
    <View style={styles.titleLayout}>
      <TouchableOpacity
        style={styles.dailyButton}
      >
        <Image style={styles.icon} source={icon_daily} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => handleSetTab(0)}
      >
        <Text style={tabIndex === 0 ? styles.tabTxtSelected : styles.tabTxt}>关注</Text>
        {tabIndex === 0 && <View style={styles.line} />}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => handleSetTab(1)}
      >
        <Text style={tabIndex === 1 ? styles.tabTxtSelected : styles.tabTxt}>发现</Text>
        {tabIndex === 1 && <View style={styles.line} />}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => handleSetTab(2)}
      >
        <Text style={tabIndex === 2 ? styles.tabTxtSelected : styles.tabTxt}>未知</Text>
        {tabIndex === 2 && <View style={styles.line} />}
      </TouchableOpacity>

      <TouchableOpacity style={styles.searchButton}>
        <Image style={styles.icon} source={icon_search} />
      </TouchableOpacity>
    </View>
  )
}
