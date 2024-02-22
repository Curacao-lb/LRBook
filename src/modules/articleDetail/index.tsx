import { useEffect, useState } from "react"
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native'

import styles from "./styles"
import articleDetailStore from "@src/store/articleDetailStore"
import { IArticleDetail } from "@src/store/type"
import { RouteProp, useRoute } from "@react-navigation/native"

type RouteParams = {
  ArticleDetail: {
    id: number
  }
}

export default () => {
  const { setArticleDetails } = articleDetailStore((state: IArticleDetail) => state)
  const { params } = useRoute<RouteProp<RouteParams, 'ArticleDetail'>>()

  useEffect(() => {
    setArticleDetails({ id: params.id })
  }, [])

  return (
    <View>
      <Text>文章详情页</Text>
    </View>
  )
}
