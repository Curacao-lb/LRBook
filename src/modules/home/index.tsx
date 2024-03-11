import { useCallback, useEffect, useState } from "react"
import { View, Text, TouchableOpacity, Image, Platform } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

import homeStore from "@src/store/homeStore"
import FlowList from '@src/components/flowlist/FlowList.js'
import ResizeImage from "@src/components/resizeImage"
import Heart from "@src/components/heart"
import { ArticleSimple, Category, IhomeStore } from "@src/store/type"

import TitleBar from "./components/titleBar"
import CategoryList from "./components/categoryList"
import { usePushy } from 'react-native-update'

import { indexStyles } from './style'

const Footer = () => {
  return (
    <Text style={indexStyles.footerTxt}>没有更多数据</Text>
  )
}

export default () => {
  const { setHomeList, homeList, isRefreshing, resetPage, getCategoryList, categoryList } = homeStore((state: IhomeStore) => state)

  const navigation = useNavigation<StackNavigationProp<any>>()
  const { checkUpdate, downloadUpdate, updateInfo, switchVersion, markSuccess, } = usePushy();
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    setHomeList()
    getCategoryList()

    checkPath()

    if (updateInfo?.upToDate) {
      markSuccess()
    }
  }, [])

  // 检查补丁更新
  const checkPath = async (): Promise<void> => {
    await checkUpdate();

    if (updateInfo?.update) {
      setUpdate(false)
      await downloadUpdate();
      setUpdate(true)
      // switchVersionLater 延迟安装
      switchVersion()
    }
  }

  const getData = (): void => {
    resetPage()
    setHomeList()
  }

  const onCategoryChange = (category: Category) => {
    console.log(JSON.stringify(category));
  }

  const onArticlePress = useCallback((item: ArticleSimple) => {
    navigation.push('ArticleDetail', { id: item.id })
  }, [])

  const renderItem = ({ item, index }: { item: ArticleSimple, index: number }) => {
    return (
      <TouchableOpacity
        style={indexStyles.item}
        onPress={() => onArticlePress(item)}
      >
        <ResizeImage uri={item.image} />
        <Text style={indexStyles.titleTxt}>{item.title}</Text>
        <View style={indexStyles.nameLayout}>
          <Image style={indexStyles.avatarImg} source={{ uri: item.avatarUrl }} />
          <Text style={indexStyles.nameTxt}>{item.userName}</Text>
          <Heart
            value={item.isFavorite}
            onValueChanged={(value: boolean) => {
              console.log(value)
            }}
          />
          <Text style={indexStyles.countTxt}>{item.favoriteCount}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={indexStyles.root}>
      <TitleBar
        tab={1}
        onTabChanged={(tab: number) => {
          console.log(`tab=${tab}`)
        }}
      />
      <FlowList
        keyExtrator={(item: ArticleSimple) => `${item.id}`}
        style={indexStyles.flatList}
        data={homeList}
        renderItem={renderItem}
        numColumns={2}
        refreshing={isRefreshing}
        onRefresh={getData}
        extraData={{ isRefreshing }}
        onEndReachedThreshold={0.1}
        onEndReached={setHomeList}
        ListFooterComponent={<Footer />}
        ListHeaderComponent={<CategoryList {...{ categoryList, onCategoryChange }} />}
      />
    </View>
  )
}
