import {
  View,
  Text,
  Image,
  LayoutAnimation,
  TouchableOpacity,
  Modal,
} from 'react-native'

import { categoryModalStyles } from './styles'
import { useEffect, useState } from 'react'

import icon_arrow from '@src/assets/icon_arrow.png'
import icon_delete from '@src/assets/icon_delete.png'
import { Category } from '@src/store/type'
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
  setMyList: (list: Category[]) => void
  setOtherList: (list: Category[]) => void
  edit: boolean
  setEdit: (state: boolean) => void
}

const MyList = ({ setVisible, myList, otherList, currentList, isMyList, setMyList, setOtherList, edit, setEdit }: MyListProps) => {
  const onItemPress = (item: Category, index: number, isMyList: boolean): void => {
    if (!edit) return // 如果不是编辑态则不允许操作

    if (isMyList) {
      handleToggleMyList(item)
    } else {
      handleToggleOtherList(item)
    }
  }

  // 点击我的列表中的内容移出并且加入到其他列表中
  const handleToggleMyList = (item: Category): void => {
    const newList = myList?.filter(({ name }) => name !== item.name)
    const newOtherList = otherList && [...otherList, { ...item, isAdd: false }]

    LayoutAnimation.easeInEaseOut()
    setMyList(newList ?? [])
    setOtherList(newOtherList ?? [])
  }

  // 点击其他列表中的内容移出并且加入到我的列表中
  const handleToggleOtherList = (item: Category): void => {
    console.log(123);

    const newOtherList = otherList?.filter(({ name }) => name !== item.name)
    const newMyList = myList && [...myList, { ...item, isAdd: true }]

    LayoutAnimation.easeInEaseOut()
    setMyList(newMyList ?? [])
    setOtherList(newOtherList ?? [])
  }

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
                  if (edit) {
                    myList && otherList && save('categoryList', JSON.stringify([...myList, ...otherList]))
                    setEdit(false)
                  } else {
                    setEdit(true)
                  }
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
              onPress={() => onItemPress(item, index, isMyList)}
            >
              <Text style={categoryModalStyles.itemTxt}>{isMyList ? item.name : `+ ${item.name}`}</Text>
              {isMyList && edit && !item.default && <Image style={categoryModalStyles.deleteImg} source={icon_delete} />}
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
  const [edit, setEdit] = useState<boolean>(false)

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
          <MyList {...{ setVisible, myList, otherList, setMyList, setOtherList, edit, setEdit }} isMyList={true} currentList={myList} />
          <MyList {...{ setVisible, myList, otherList, setMyList, setOtherList, edit, setEdit }} isMyList={false} currentList={otherList} />
          {/* 蒙层 */}
          <View style={categoryModalStyles.mask} />
        </View>
      </View>
    </Modal>
  )
}
