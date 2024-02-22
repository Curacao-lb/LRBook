import { View } from 'react-native'

import articleDetailStore from '@src/store/articleDetailStore'
import { IArticleDetail } from '@src/store/type'
import { ImageSlider } from '@src/components/slidePager'

import styles from '../styles'

export default ({ height }: { height: number }) => {
  const { details } = articleDetailStore((state: IArticleDetail) => state)

  return (
    <View style={{ paddingBottom: 30 }} >
      <ImageSlider
        data={details.images.map((i) => ({ img: i }))}
        autoPlay={false} // 自动轮播
        closeIconColor='white' // 白色小点的颜色
        caroselImageStyle={{ height }} // 动态高度值
        indicatorContainerStyle={{ bottom: -40 }} // 白色小点整体的位置
        activeIndicatorStyle={styles.activeDot} // 选中小点的颜色
        inActiveIndicatorStyle={styles.inActiveDot} // 未选中小点的颜色
      />
    </View>
  )
}