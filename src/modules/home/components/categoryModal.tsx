import {
  View,
  Text,
  StyleSheet,
  Image,
  LayoutAnimation,
  TouchableOpacity,
  StatusBar,
  Modal,
  Dimensions,
} from 'react-native'

import { categoryModalStyles } from './styles'
import { useEffect, useState } from 'react'
import { Category } from '@src/store/type'

import icon_arrow from '@src/assets/icon_arrow.png'
import icon_delete from '@src/assets/icon_delete.png'
import { save } from '@src/store'

export type CategoryModalProps = {
  visible: boolean
  setVisible: (visible: boolean) => void
  categoryList: Category[] | undefined
}

export type MyListProps = {
  setVisible: (visible: boolean) => void
  myList: Category[] | undefined
  otherList: Category[] | undefined
  currentList: Category[] | undefined
  isMyList: boolean
}

const MyList = ({ setVisible, myList, otherList, currentList, isMyList }: MyListProps) => {
  const [edit, setEdit] = useState<boolean>(false)

  return (
    <>
      <View style={[categoryModalStyles.row, { marginTop: isMyList ? 0 : 32 }]}>
        <Text style={categoryModalStyles.titleTxt}>{isMyList ? '我的频道' : '推荐频道'}</Text>
        <Text style={categoryModalStyles.subTitleTxt}> {isMyList ? '点击进入频道' : '点击添加频道'}</Text>
        {
          isMyList ? (
            <>
              <TouchableOpacity
                style={categoryModalStyles.editButton}
                onPress={() => {
                  setEdit((data => {
                    if (data) {
                      myList && otherList && save('categoryList', JSON.stringify([...myList, ...otherList]))
                      return false
                    } else {
                      return true
                    }
                  }
                  ))
                }}
              >
                <Text style={categoryModalStyles.editTxt}>
                  {edit ? '完成编辑' : '进入编辑'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={categoryModalStyles.closeButton}
                onPress={() => setVisible(false)}
              >
                <Image style={categoryModalStyles.closeImg} source={icon_arrow} />
              </TouchableOpacity>
            </>
          ) : null
        }
      </View>
      <View style={categoryModalStyles.listContent}>
        {currentList?.map((item: Category, index: number) => {
          return (
            <TouchableOpacity
              key={`${item.name}`}
              style={item.default ? categoryModalStyles.itemLayoutDefault : categoryModalStyles.itemLayout}
            // onPress={onMyItemPress(item, index)}
            >
              <Text style={categoryModalStyles.itemTxt}>{item.name}</Text>
              {edit && !item.default && <Image style={categoryModalStyles.deleteImg} source={icon_delete} />}
            </TouchableOpacity>
          )
        })}
      </View>
    </>
  )
}

export default ({ visible, setVisible, categoryList }: CategoryModalProps) => {
  const [myList, setMyList] = useState<Category[]>()
  const [otherList, setOtherList] = useState<Category[]>()

  useEffect(() => {
    if (!categoryList) {
      return
    }

    setMyList(categoryList.filter(({ isAdd }) => isAdd))
    setOtherList(categoryList.filter(({ isAdd }) => !isAdd))
  }, [categoryList])

  return (
    <Modal
      visible={visible} // 根据 state 控制 visible
      animationType="fade"
      transparent={true} // 透明的
      onRequestClose={() => setVisible(false)} // android 物理键退出的时候触发关闭 Modal 弹窗
    >
      <View style={categoryModalStyles.root}>
        <View style={categoryModalStyles.content}>
          <MyList {...{ setVisible, myList, otherList }} isMyList={true} currentList={myList} />
          <MyList {...{ setVisible, myList, otherList }} isMyList={false} currentList={otherList} />
          {/* 蒙层 */}
          <View style={categoryModalStyles.mask} />
        </View>
      </View>
    </Modal>
  )
}