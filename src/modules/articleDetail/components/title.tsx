import { View, TouchableOpacity, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import articleDetailStore from '@src/store/articleDetailStore'
import icon_arrow from '@src/assets/icon_arrow.png'
import icon_share from '@src/assets/icon_share.png'
import { IArticleDetail } from '@src/store/type'

import styles from '../styles'

export default () => {
  const { details } = articleDetailStore((state: IArticleDetail) => state)
  const navigation = useNavigation<StackNavigationProp<any>>()

  return (
    <View style={styles.titleLayout}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.pop()}
      >
        <Image style={styles.backImg} source={icon_arrow} />
      </TouchableOpacity>
      <Image style={styles.avatarImg} source={{ uri: details.avatarUrl }} />
      <Text style={styles.userNameTxt}>{details.userName}</Text>
      <Text style={styles.followTxt}>关注</Text>
      <Image style={styles.shareImg} source={icon_share} />
    </View>
  )
}