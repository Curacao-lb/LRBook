import { Image, LayoutChangeEvent, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import { infoStyles, styles, tabsStyles, listStyles } from '../styles'

import userStore from '@src/store/userStore'

import icon_add from '@src/assets/icon_add.png'
import icon_qrcode from '@src/assets/icon_qrcode.png'
import icon_male from '@src/assets/icon_male.png'
import icon_female from '@src/assets/icon_female.png'
import icon_setting from '@src/assets/icon_setting.png'
import icon_default_avatar from '@src/assets/icon_default_avatar.png'
import mineStore from '@src/store/mineStore'
import { ArticleSimple, IMineStore } from '@src/store/type'
import { useState } from 'react'
import { EMPTY_CONFIG } from '../config'
import Empty from '@src/components/Empty'
import Heart from '@src/components/heart'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

const Info = ({ setBgImgHeight }: { setBgImgHeight: (height: number) => void }): JSX.Element => {
  const { userInfo } = userStore((state: any) => state)
  const { info } = mineStore((state: IMineStore) => state)

  return (
    <View onLayout={(e: LayoutChangeEvent) => {
      const { height } = e.nativeEvent.layout
      setBgImgHeight(height)
    }}>
      <View style={infoStyles.avatarLayout}>
        <Image style={infoStyles.avatarImg} source={userInfo.avatar ? { uri: userInfo.avatar } : icon_default_avatar} />
        <Image style={infoStyles.addImg} source={icon_add} />
        <View style={infoStyles.nameLayout}>
          <Text style={infoStyles.nameTxt}>{userInfo.nickName}</Text>
          <View style={infoStyles.idLayout}>
            <Text style={infoStyles.idTxt}>小红书号：{userInfo.redBookId}</Text>
            <Image style={infoStyles.qrcodeImg} source={icon_qrcode} />
          </View>
        </View>
      </View>
      <Text style={infoStyles.descTxt}>{userInfo.desc}</Text>
      <View style={infoStyles.sexLayout}>
        <Image style={infoStyles.sexImg} source={userInfo.sex === 'male' ? icon_male : icon_female} />
      </View>
      <View style={infoStyles.infoLayout}>
        <View style={infoStyles.infoItem}>
          <Text style={infoStyles.infoValue}>{info.followCount}</Text>
          <Text style={infoStyles.infoLabel}>关注</Text>
        </View>
        <View style={infoStyles.infoItem}>
          <Text style={infoStyles.infoValue}>{info.fans}</Text>
          <Text style={infoStyles.infoLabel}>粉丝</Text>
        </View>
        <View style={infoStyles.infoItem}>
          <Text style={infoStyles.infoValue}>{info.favorateCount}</Text>
          <Text style={infoStyles.infoLabel}>获赞与收藏</Text>
        </View>

        <View style={{ flex: 1 }} />

        <TouchableOpacity
          style={infoStyles.infoButton}
        >
          <Text style={infoStyles.editTxt}>编辑资料</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={infoStyles.infoButton}
        >
          <Image style={infoStyles.settingImg} source={icon_setting} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Tabs = ({ setTabIndex, tabIndex }: { setTabIndex: (tabIndex: number) => void, tabIndex: number }): JSX.Element => {
  return (
    <View style={tabsStyles.titleLayout}>
      <TouchableOpacity
        style={tabsStyles.tabButton}
        onPress={() => {
          setTabIndex(0)
        }}
      >
        <Text style={tabIndex === 0 ? tabsStyles.tabTxtSelected : tabsStyles.tabTxt}>笔记</Text>
        {tabIndex === 0 && <View style={tabsStyles.line} />}
      </TouchableOpacity>

      <TouchableOpacity
        style={tabsStyles.tabButton}
        onPress={() => {
          setTabIndex(1)
        }}
      >
        <Text style={tabIndex === 1 ? tabsStyles.tabTxtSelected : tabsStyles.tabTxt}>收藏</Text>
        {tabIndex === 1 && <View style={tabsStyles.line} />}
      </TouchableOpacity>

      <TouchableOpacity
        style={tabsStyles.tabButton}
        onPress={() => {
          setTabIndex(2)
        }}
      >
        <Text style={tabIndex === 2 ? tabsStyles.tabTxtSelected : tabsStyles.tabTxt}>赞过</Text>
        {tabIndex === 2 && <View style={tabsStyles.line} />}
      </TouchableOpacity>
    </View>
  )
}

const List = ({ tabIndex, navigation }: { tabIndex: number, navigation: StackNavigationProp<any> }) => {
  const { noteList, collectionList, favorateList } = mineStore((state: IMineStore) => state)
  const currentList = [noteList, collectionList, favorateList][tabIndex]

  if (!currentList?.length) {
    const config = EMPTY_CONFIG[tabIndex]
    return <Empty icon={config.icon} tips={config.tips} />
  }

  const onArticlePress = (article: ArticleSimple) => {
    navigation.push('ArticleDetail', { id: article.id })
  }

  return (
    <View style={listStyles.listContainer}>
      {currentList.map((item, index) => (
        <TouchableOpacity
          key={`${item.id}-${index}`}
          style={listStyles.item}
          onPress={() => onArticlePress(item)}
        >
          <Image style={listStyles.itemImg} source={{ uri: item.image }} />
          <Text style={listStyles.titleTxt}>{item.title}</Text>
          <View style={listStyles.nameLayout}>
            <Image style={listStyles.avatarImg} source={{ uri: item.avatarUrl }} />
            <Text style={listStyles.nameTxt}>{item.userName}</Text>
            <Heart
              value={item.isFavorite}
              onValueChanged={(value: boolean) => {
                console.log(value)
              }}
            />
            <Text style={listStyles.countTxt}>{item.favoriteCount}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default ({ setBgImgHeight }: { setBgImgHeight: (height: number) => void }) => {
  const [tabIndex, setTabIndex] = useState<number>(0)
  const navigation = useNavigation<StackNavigationProp<any>>()

  return (
    <ScrollView
      style={styles.scrollView}
    >
      <Info {...{ setBgImgHeight }} />
      <Tabs {...{ setTabIndex, tabIndex }} />
      <List {...{ tabIndex, navigation }} />
    </ScrollView>
  )
}
