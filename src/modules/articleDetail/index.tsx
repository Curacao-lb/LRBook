import { useEffect, useState } from 'react'
import { RouteProp, useRoute } from '@react-navigation/native'
import {
  View,
  Dimensions,
  Image,
  ScrollView
} from 'react-native'

import articleDetailStore from '@src/store/articleDetailStore'
import { IArticleDetail } from '@src/store/type'

import styles from './styles'
import ArticlTitle from './components/title'
import Images from './components/images'
import Info from './components/info'
import Comments from './components/comments'
import Bottom from './components/bottom'

type RouteParams = {
  ArticleDetail: {
    id: number
  }
}

export default () => {
  const { setArticleDetails, details } = articleDetailStore((state: IArticleDetail) => state)
  const { params } = useRoute<RouteProp<RouteParams, 'ArticleDetail'>>()
  const { width: SCREEN_WIDTH } = Dimensions.get('window')

  const [height, setHeight] = useState<number>(400)

  /**
   * 拿数据
   */
  useEffect(() => {
    setArticleDetails({ id: params.id })
  }, [])

  // 动态生成初始化高度
  useEffect(() => {
    if (!details?.images) {
      return
    }
    const firstImg = details?.images[0] as string
    Image.getSize(firstImg, (width: number, height: number) => {
      const showHeight = SCREEN_WIDTH * height / width
      setHeight(showHeight)
    })
  }, [details?.images])

  return (
    JSON.stringify(details) !== '{}' ? (
      <View style={styles.root}>
        <ArticlTitle />
        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <Images {...{ height }} />
          <Info />
          <Comments />
        </ScrollView>
        <Bottom />
      </View>
    ) : null
  )
}
