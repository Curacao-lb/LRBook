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

export type IhomeStore = {
  homeList: ArticleSimple[]
  setHomeList: (params?: any) => void
  page: number
  isRefreshing: boolean // 当前是否处于刷新状态
  resetPage: () => void
  categoryList: Category[]
  getCategoryList: () => void
}

export interface ParamsType {
  [key: string]: any
}

export type Category = {
  name: string; // 名称
  default: boolean; // 是否是默认展示
  isAdd: boolean; // 是否是已经添加的
}

export type IArticleDetail = {
  details: Article
  setArticleDetails: ({ id }: { id: number }) => void
}