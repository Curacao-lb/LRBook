import { useEffect } from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"

import homeStore, { ArticleSimple } from "@src/store/homeStore"
import FlowList from '@src/components/flowlist/FlowList.js'
import ResizeImage from "@src/components/resizeImage"

import { indexStyles } from './style'
import Heart from "@src/components/heart"
import TitleBar from "./components/titleBar"

const Footer = () => {
  return (
    <Text style={indexStyles.footerTxt}>没有更多数据</Text>
  )
}

const Header = () => {
  return (
    <Text style={indexStyles.footerTxt}>已经到最顶了</Text>
  )
}

export default () => {
  const { setHomeList, homeList, isRefreshing, resetPage } = homeStore((state: any) => state)

  useEffect(() => {
    setHomeList()
  }, [])

  const getData = (): void => {
    resetPage()
    setHomeList()
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
        ListHeaderComponent={<Header />}
      />
    </View>
  )
}
