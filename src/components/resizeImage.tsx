/**
 * 自定义Resizelmage组件，实现可变图片大小
 */

import { useEffect, useState } from "react"
import { Image, Dimensions } from 'react-native'

type Props = {
  uri: string
}

const { width: SCREEN_WIDTH } = Dimensions.get('window')
const SHOW_WIDTH = SCREEN_WIDTH - 18 >> 1

export default ({ uri }: Props) => {

  const [height, setHeight] = useState<number>(200)

  useEffect(() => {
    Image.getSize(uri, (width: number, height: number) => {
      // 将高度按这个公式转换出来
      const showHeight = SHOW_WIDTH * height / width
      setHeight(showHeight)
    })
  }, [uri])

  return (
    <Image
      style={{
        width: SCREEN_WIDTH - 18 >> 1,
        height,
        resizeMode: 'cover',
      }}
      source={{ uri }}
    />
  )
}