import shoppingStore from '@src/store/shoppingStore'
import { View, TouchableOpacity, Image, Text, FlatList } from 'react-native'

import styles, { listHeaderStyles } from './list.styles'
import { GoodsSimple } from '@src/store/type'

const ListHeader = () => {
  const { categoryList } = shoppingStore((state) => state)

  return (
    <View style={listHeaderStyles.container}>
      {categoryList.map((item) => (
        <View key={`${item.id}`} style={listHeaderStyles.categoryItem}>
          <Image
            style={listHeaderStyles.itemImg}
            source={{ uri: item.image }}
          />
          <Text style={listHeaderStyles.itemNameTxt}>{item.name}</Text>
        </View>
      ))}
    </View>
  )
}

export default () => {
  const { goodsList, categoryList } = shoppingStore((state) => state)

  const renderItem = ({ item }: { item: GoodsSimple }) => {
    return (
      <View style={styles.item}>
        <Image style={styles.img} source={{ uri: item.image }} />
        <Text style={styles.titleTxt}>{item.title}</Text>
        {!!item.promotion &&
          <Text style={styles.promotionTxt}>{item.promotion}</Text>
        }
        <Text style={styles.prefix}>
          ¥
          <Text style={styles.priceTxt}>
            {item.price}
            {!!item.originPrice &&
              <Text style={styles.originTxt}>原价：{item.originPrice}</Text>
            }
          </Text>
        </Text>
      </View>
    )
  }

  return (
    <FlatList
      style={{ flex: 1 }}
      data={goodsList}
      keyExtractor={(item) => `${item.id}`}
      extraData={[categoryList]} // 额外数据，需要依赖刷新的数据
      renderItem={renderItem}
      numColumns={2}
      ListHeaderComponent={<ListHeader />}
    />
  )
}
