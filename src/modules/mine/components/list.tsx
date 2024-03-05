import { Image, LayoutChangeEvent, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import { infoStyles, styles } from '../styles'

import userStore from '@src/store/userStore'

import icon_add from '@src/assets/icon_add.png'
import icon_qrcode from '@src/assets/icon_qrcode.png'
import icon_male from '@src/assets/icon_male.png'
import icon_female from '@src/assets/icon_female.png'
import icon_setting from '@src/assets/icon_setting.png'
import icon_default_avatar from '@src/assets/icon_default_avatar.png'

const Info = ({ setBgImgHeight }: { setBgImgHeight: (height: number) => void }): JSX.Element => {
  const { userInfo } = userStore((state: any) => state)

  return (
    <View onLayout={(e: LayoutChangeEvent) => {
      const { height } = e.nativeEvent.layout;
      setBgImgHeight(height);
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
          {/* <Text style={infoStyles.infoValue}>{info.followCount}</Text> */}
          <Text style={infoStyles.infoLabel}>关注</Text>
        </View>
        <View style={infoStyles.infoItem}>
          {/* <Text style={infoStyles.infoValue}>{info.fans}</Text> */}
          <Text style={infoStyles.infoLabel}>粉丝</Text>
        </View>
        <View style={infoStyles.infoItem}>
          {/* <Text style={infoStyles.infoValue}>{info.favorateCount}</Text> */}
          <Text style={infoStyles.infoLabel}>获赞与收藏</Text>
        </View>

        <View style={{ flex: 1, }} />

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

export default ({ setBgImgHeight }: { setBgImgHeight: (height: number) => void }) => {
  return (
    <ScrollView
      style={styles.scrollView}
    >
      <Info {...{ setBgImgHeight }} />
    </ScrollView>
  )
}