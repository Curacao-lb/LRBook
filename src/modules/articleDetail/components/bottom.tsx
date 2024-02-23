import { View, Text, Image, TextInput } from 'react-native'

import Heart from '@src/components/heart'
import icon_edit_comment from '@src/assets/icon_edit_comment.png'
import icon_collection_selected from '@src/assets/icon_collection_selected.png'
import icon_collection from '@src/assets/icon_collection.png'
import icon_comment from '@src/assets/icon_comment.png'
import articleDetailStore from '@src/store/articleDetailStore'
import { IArticleDetail } from '@src/store/type'

import styles from '../styles'

export default () => {
  const { details } = articleDetailStore((state: IArticleDetail) => state)

  return (
    <View style={styles.bottomLayout}>
      <View style={styles.bottomEditLayout}>
        <Image style={styles.editImg} source={icon_edit_comment} />
        <TextInput
          style={styles.bottomCommentInput}
          placeholder='说点什么'
          placeholderTextColor='#333'
        />
      </View>
      <Heart
        size={30}
        value={details.isFavorite}
      />
      <Text style={styles.bottomCount}>
        {details.favoriteCount}
      </Text>

      <Image
        style={styles.bottomIcon}
        source={details.isCollection ? icon_collection_selected : icon_collection}
      />
      <Text style={styles.bottomCount}>
        {details.collectionCount}
      </Text>

      <Image
        style={styles.bottomIcon}
        source={icon_comment}
      />
      <Text style={styles.bottomCount}>
        {details.comments?.length || 0}
      </Text>
    </View>
  )
}
