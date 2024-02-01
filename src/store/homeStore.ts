import { create } from 'zustand'
import { request } from '@src/utils/request'
import { IhomeStore, ParamsType } from './type'
import { load } from '.'
import { DEFAULT_CATEGORY_LIST } from './data'

const homeStore = create<IhomeStore>((set, get) => ({
  homeList: [], // 主页数据
  setHomeList: (params: ParamsType) => requestList(params, set, get), // 设置主页数据方法
  page: 1,
  size: 10,
  isRefreshing: false,
  resetPage: () => set({ page: 1 }),
  categoryList: [],
  getCategoryList: () => getCategoryList(set) // 获取首页频道选择列表，从本地取出
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

const getCategoryList = async (set: Function) => {
  const cacheList = await load('categoryList')
  if (cacheList) {
    const list = JSON.parse(cacheList)
    if (list?.length) {
      set({ categoryList: list })
    } else {
      set({ categoryList: DEFAULT_CATEGORY_LIST })
    }
  } else {
    set({ categoryList: DEFAULT_CATEGORY_LIST })
  }
}

export default homeStore
