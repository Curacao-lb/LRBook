import { useEffect } from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"

import homeStore from "@src/store/homeStore"
import { ArticleSimple, Category, IhomeStore } from "@src/store/type"
import FlowList from '@src/components/flowlist/FlowList.js'
import ResizeImage from "@src/components/resizeImage"

import { indexStyles } from './style'
import Heart from "@src/components/heart"
import TitleBar from "./components/titleBar"
import CategoryList from "./components/categoryList"

const Footer = () => {
  return (
    <Text style={indexStyles.footerTxt}>没有更多数据</Text>
  )
}

export default () => {
  const { setHomeList, homeList, isRefreshing, resetPage, getCategoryList, categoryList } = homeStore((state: IhomeStore) => state)

  useEffect(() => {
    setHomeList()
    getCategoryList()
  }, [])

  const getData = (): void => {
    resetPage()
    setHomeList()
  }

  const onCategoryChange = (category: Category) => {
    console.log(JSON.stringify(category));
  }

  const renderItem = ({ item, index }: { item: ArticleSimple, index: number }) => {
    return (
      <TouchableOpacity
        style={indexStyles.item}
      // onPress={onArticlePress(item)}
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
