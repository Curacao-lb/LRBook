import { IUnReadList, MessageListItem } from '@src/store/type'
import { FlatList, Image, Text, View } from 'react-native'

import { itemStyles, headerStyles } from './styles'
import icon_to_top from '@src/assets/icon_to_top.png'
import icon_no_collection from '@src/assets/icon_no_collection.webp'
import icon_star from '@src/assets/icon_star.png'
import icon_new_follow from '@src/assets/icon_new_follow.png'
import icon_comments from '@src/assets/icon_comments.png'
import Empty from '@src/components/Empty'

const UnRead = ({ count }: { count: number }) => {
  return (
    <Text style={headerStyles.txt}>{count > 99 ? '99+' : count}</Text>
  );
}

const Header = ({ unReadList }: { unReadList: IUnReadList }) => {
  return (
    <View style={headerStyles.headerLayout}>
      <View style={headerStyles.headerItem}>
        <View>
          <Image style={headerStyles.itemImg} source={icon_star} />
          {!!unReadList?.unreadFavorate && <UnRead count={unReadList?.unreadFavorate} />}
        </View>
        <Text style={headerStyles.itemTxt}>赞和收藏</Text>
      </View>
      <View style={headerStyles.headerItem}>
        <View>
          <Image style={headerStyles.itemImg} source={icon_new_follow} />
          {!!unReadList?.newFollow && <UnRead count={unReadList?.newFollow} />}
        </View>
        <Text style={headerStyles.itemTxt}>新增关注</Text>
      </View>
      <View style={headerStyles.headerItem}>
        <View>
          <Image style={headerStyles.itemImg} source={icon_comments} />
          {!!unReadList?.comment && <UnRead count={unReadList?.comment} />}
        </View>
        <Text style={headerStyles.itemTxt}>评论和@</Text>
      </View>
    </View>
  )
}

export default ({ messageList, unReadList }: { messageList: MessageListItem[], unReadList: IUnReadList }) => {
  const renderItem = ({ item }: { item: MessageListItem }) => {
    return (
      <View style={itemStyles.item}>
        <Image style={itemStyles.avatarImg} source={{ uri: item.avatarUrl }} />
        <View style={itemStyles.contentLayout}>
          <Text style={itemStyles.nameTxt}>{item.name}</Text>
          <Text style={itemStyles.lastMessageTxt}>{item.lastMessage}</Text>
        </View>
        <View style={itemStyles.rightLayout}>
          <Text style={itemStyles.timeTxt}>{item.lastMessageTime}</Text>
          <Image style={itemStyles.iconTop} source={icon_to_top} />
        </View>
      </View>
    );
  }

  return (
    <FlatList
      style={{ flex: 1 }}
      data={messageList}
      extraData={[unReadList]} // 额外数据，需要依赖刷新的数据
      keyExtractor={(item) => `${item.id}`}
      renderItem={renderItem}
      ListHeaderComponent={<Header {...{ unReadList }} />}
      ListEmptyComponent={<Empty icon={icon_no_collection} tips="暂无消息" />}
    />
  )
}
