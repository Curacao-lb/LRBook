import { View, Text } from 'react-native'

import articleDetailStore from '@src/store/articleDetailStore'
import { IArticleDetail } from '@src/store/type'

import styles from '../styles'

export default () => {
  const { details } = articleDetailStore((state: IArticleDetail) => state)
  const tags = details.tag?.map(i => `# ${i}`).join(' ')
  return (
    <>
      <Text style={styles.articleTitleTxt}>{details.title}</Text>
      <Text style={styles.descTxt}>{details.desc}</Text>
      <Text style={styles.tagsTxt}>{tags}</Text>
      <Text style={styles.timeAndLocationTxt}>{details.dateTime}  {details.location}</Text>
      <View style={styles.line} />
    </>
  )
}
