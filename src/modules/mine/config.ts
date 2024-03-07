import icon_no_note from '@src/assets/icon_no_note.webp'
import icon_no_collection from '@src/assets/icon_no_collection.webp'
import icon_no_favorate from '@src/assets/icon_no_favorate.webp'

import icon_setting from '@src/assets/icon_setting.png'
import icon_service from '@src/assets/icon_service.png'
import icon_scan from '@src/assets/icon_scan.png'

import icon_fid_user from '@src/assets/icon_find_user.png'
import icon_draft from '@src/assets/icon_draft.png'
import icon_create_center from '@src/assets/icon_create_center.png'
import icon_browse_histroy from '@src/assets/icon_browse_history.png'
import icon_packet from '@src/assets/icon_packet.png'
import icon_free_net from '@src/assets/icon_free_net.png'
import icon_nice_goods from '@src/assets/icon_nice_goods.png'
import icon_orders from '@src/assets/icon_orders.png'
import icon_shop_car from '@src/assets/icon_shop_car.png'
import icon_coupon from '@src/assets/icon_coupon.png'
import icon_wish from '@src/assets/icon_wish.png'
import icon_red_vip from '@src/assets/icon_red_vip.png'
import icon_community from '@src/assets/icon_community.png'
import icon_exit from '@src/assets/icon_exit.png'

export const EMPTY_CONFIG = [
  { icon: icon_no_note, tips: '快去发布今日的好心情吧～' },
  { icon: icon_no_collection, tips: '快去收藏你喜欢的作品吧～' },
  { icon: icon_no_favorate, tips: '喜欢点赞的人运气不会太差哦～' },
]

export const MENUS = [
  [
    { icon: icon_fid_user, name: '发现好友' },
  ],
  [
    { icon: icon_draft, name: '我的草稿' },
    { icon: icon_create_center, name: '创作中心' },
    { icon: icon_browse_histroy, name: '浏览记录' },
    { icon: icon_packet, name: '钱包' },
    { icon: icon_free_net, name: '免流量' },
    { icon: icon_nice_goods, name: '好物体验' },
  ],
  [
    { icon: icon_orders, name: '订单' },
    { icon: icon_shop_car, name: '购物车' },
    { icon: icon_coupon, name: '卡券' },
    { icon: icon_wish, name: '心愿单' },
    { icon: icon_red_vip, name: '小红书会员' },
  ],
  [
    { icon: icon_community, name: '社区公约' },
    { icon: icon_exit, name: '退出登录' }
  ],
]

export const BOTTOM_MENUS = [
  { icon: icon_setting, txt: '设置' },
  { icon: icon_service, txt: '帮助与客服' },
  { icon: icon_scan, txt: '扫一扫' },
]
