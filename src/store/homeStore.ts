import { create } from 'zustand'
import { request } from '@src/utils/request'

export type ArticleComment = {
  userName: string
  avatarUrl: string
  message: string
  dateTime: string
  location: string
  favoriteCount: number // 点赞数
  isFavorite: boolean // 是否有点赞
  children?: ArticleComment[] // 评论的评论
}

export type Article = {
  id: number
  title: string
  desc: string
  tag: string[]
  dateTime: string
  location: string
  userId: number
  userName: string
  isFollow: boolean // 是否关注了作者
  avatarUrl: string
  images: string[]
  favoriteCount: number // 点赞数
  collectionCount: number // 收藏数
  isFavorite: boolean // 是否有点赞
  isCollection: boolean // 是否有收藏
  comments?: ArticleComment[] // 评论数组
}

// 简化版的文章类型
export type ArticleSimple = {
  id: number
  title: string
  userName: string
  avatarUrl: string
  favoriteCount: number
  isFavorite: boolean
  image: string
}

type IhomeStore = {
  homeList: ArticleSimple[]
  setHomeList: (params: any) => void
  page: number
  isRefreshing: boolean // 当前是否处于刷新状态
  resetPage: () => void
}

interface ParamsType {
  [key: string]: any
}

const homeStore = create<IhomeStore>((set, get) => ({
  homeList: [],
  setHomeList: (params: any) => requestList(params, set, get),
  page: 1,
  size: 10,
  isRefreshing: false,
  resetPage: () => set({ page: 1 }),
}))

const requestList = async (params: ParamsType, set: Function, get: Function) => {
  const { page, size, homeList, isRefreshing } = get()
  if (isRefreshing) {
    return
  }
  set({ isRefreshing: true })

  const param = {
    ...params,
    page,
    size,
  }

  // 执行请求操作
  const { data } = await request('homeList', param)

  // 数据处理逻辑
  if (data && data.length > 0) {
    set({
      homeList: page === 1 ? data : [...homeList, ...data],
      page: page + 1
    })

  } else if (page === 1) {
    set({ homeList: [] })
  }

  set({ isRefreshing: false })
}

export default homeStore
