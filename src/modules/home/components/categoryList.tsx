import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native'

import icon_arrow from '@src/assets/icon_arrow.png'
import { categoryListStyles } from './styles'
import { Category } from '@src/store/type'
import { useEffect, useState } from 'react'
import CategoryModal from './categoryModal'

type Props = {
  categoryList: Category[]
  onCategoryChange: (category: Category) => void
}

export default ({ categoryList, onCategoryChange }: Props) => {
  const [category, setCategory] = useState<Category>()
  const [visible, setVisible] = useState<boolean>(false) // 设置 Modal 的显隐

  useEffect(() => {
    if (categoryList.length > 0) {
      setCategory(categoryList.find(i => i.name === '推荐'))
    }
  }, [categoryList])

  const onCategoryPress = (item: Category) => {
    setCategory(item)
    onCategoryChange?.(item)
  }

  return (
    <View style={categoryListStyles.container}>
      <ScrollView
        style={categoryListStyles.scrollView}
        horizontal={true}
        showsHorizontalScrollIndicator={false} // 取消滚动条
      >
        {
          categoryList.filter(({ isAdd }) => isAdd).map((item: Category) => {
            const isSelected = category?.name === item.name

            return (
              <TouchableOpacity
                key={`${item.name}`}
                style={categoryListStyles.tabItem}
                onPress={() => onCategoryPress(item)}
              >
                <Text
                  style={isSelected ? categoryListStyles.tabItemTxtSelected : categoryListStyles.tabItemTxt}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>

      <TouchableOpacity
        style={categoryListStyles.openButton}
        onPress={() => setVisible(true)}
      >
        <Image style={categoryListStyles.openImg} source={icon_arrow} />
      </TouchableOpacity>

      <CategoryModal {...{ setVisible, visible, categoryList }} />
    </View>
  )
}
