import dayjs from 'dayjs'
import { View, Text, Image, TextInput, Dimensions } from 'react-native'

import articleDetailStore from '@src/store/articleDetailStore'
import userStore from '@src/store/userStore'
import Heart from '@src/components/heart'
import icon_default_avatar from '@src/assets/icon_default_avatar.png'
import { ArticleComment, IArticleDetail } from '@src/store/type'

import styles from './styles'

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const WritingArea = () => {
  const { details } = articleDetailStore((state: IArticleDetail) => state)
  const { userInfo } = userStore((state: any) => state)
  const count = details.comments?.length || 0

  return (
    <>
      <Text style={styles.commentsCountTxt}>
        {count ? `共 ${count} 条评论` : '暂无评论'}
      </Text>
      <View style={styles.inputLayout}>
        <Image style={styles.userAvatarImg} source={userInfo.avatar ? { uri: userInfo.avatar } : icon_default_avatar} />
        <TextInput
          style={styles.commentInput}
          placeholder='说点什么吧，万一火了呢～'
          placeholderTextColor='#bbb'
        />
      </View>
    </>
  )
}

export default () => {
  const { details } = articleDetailStore((state: IArticleDetail) => state)
  const count = details.comments?.length || 0

  return (
    <>
      <WritingArea />
      {!!count && <View style={styles.commentsContainer}>
        {
          details.comments?.map((i: ArticleComment) => (
            <View key={`${i.dateTime}+${i.userName}`}>
              <View style={styles.commentItem}>
                {/* 头像 */}
                <Image
                  style={styles.cAvatar}
                  source={i.avatarUrl ? { uri: i.avatarUrl } : icon_default_avatar}
                />
                {/* 当前评论 */}
                <View style={styles.contentLayout}>
                  <Text style={styles.nameTxt}>{i.userName}</Text>
                  <Text style={styles.messageTxt}>
                    {i.message}
                    <Text style={styles.timeLocationTxt}>
                      {dayjs(i.dateTime).format('MM-DD')}  {i.location}
                    </Text>
                  </Text>
                  {/* 追加评论 */}
                  {
                    !!i.children?.length && (
                      i.children.map((child: ArticleComment) => (
                        <View
                          key={`${child.dateTime}+${child.userName}`}
                          style={[styles.commentItem, { marginTop: 12, width: SCREEN_WIDTH - 80 }]}
                        >
                          <Image
                            style={[styles.cAvatar, { width: 32, height: 32, }]}
                            source={child.avatarUrl ? { uri: child.avatarUrl } : icon_default_avatar}
                          />
                          <View style={styles.contentLayout}>
                            <Text style={styles.nameTxt}>{child.userName}</Text>
                            <Text style={styles.messageTxt}>
                              {child.message}
                              <Text style={styles.timeLocationTxt}>
                                {dayjs(child.dateTime).format('MM-DD')}  {child.location}
                              </Text>
                            </Text>
                          </View>

                          <View style={styles.countLayout}>
                            <Heart size={20} value={child.isFavorite} />
                            <Text style={styles.fCount}>{child.favoriteCount}</Text>
                          </View>
                        </View>
                      ))
                    )
                  }
                </View>
                {/* 点赞 */}
                <View style={styles.countLayout}>
                  <Heart size={20} value={i.isFavorite} />
                  <Text style={styles.fCount}>{i.favoriteCount}</Text>
                </View>
              </View>
              <View style={styles.divider} />
            </View>
          ))
        }
      </View>
      }
    </>
  )
}
