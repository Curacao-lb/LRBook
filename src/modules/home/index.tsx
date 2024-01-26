import { useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, Dimensions } from "react-native";
import { indexStyles } from './style'
import homeStore, { ArticleSimple } from "@src/store/homeStore";

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const Footer = () => {
  return (
    <Text style={indexStyles.footerTxt}>没有更多数据</Text>
  );
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
        {/* <ResizeImage uri={item.image} /> */}
        <Image style={indexStyles.itemImage} source={{ uri: item.image }} />
        <Text style={indexStyles.titleTxt}>{item.title}</Text>
        <View style={indexStyles.nameLayout}>
          <Image style={indexStyles.avatarImg} source={{ uri: item.avatarUrl }} />
          <Text style={indexStyles.nameTxt}>{item.userName}</Text>
          {/* <Heart
            value={item.isFavorite}
            onValueChanged={(value: boolean) => {
              console.log(value);
            }}
          /> */}
          <Text style={indexStyles.countTxt}>{item.favoriteCount}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={indexStyles.root}>
      <FlatList
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
      />
    </View>
  )
}
