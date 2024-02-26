import { create } from 'zustand'
import { request } from '@src/utils/request'
import Loading from '@src/components/widget/Loading'
import { GoodsCategory, GoodsSimple, IShoppingStore } from './type'

const SIZE = 10

const shoppingStore = create<IShoppingStore>((set, get) => ({
  goodsList: [] as GoodsSimple[],
  setShoppingList: () => requestShoppingList(set, get),
  page: 1,
  size: SIZE,
  refreshing: false,
  categoryList: [] as GoodsCategory[],
  setTopTenCategoryList: () => requestTopTenCategoryList(set),
}))

const requestShoppingList = async (set: Function, get: Function) => {
  const { page, size, goodsList, isRefreshing } = get()

  if (isRefreshing) {
    return
  }

  Loading.show()

  try {
    set({ isRefreshing: true })
    const params = {
      page,
      size
    }
    const { data } = await request('goodsList', params)
    // 数据处理逻辑
    if (data && data.length > 0) {
      set({
        goodsList: page === 1 ? data : [...goodsList, ...data],
        page: page + 1
      })

    } else if (page === 1) {
      set({ goodsList: [] })
    }
  } catch (error) {
    console.log(error)
  } finally {
    set({ isRefreshing: false })
    Loading.hide()
  }
}

const requestTopTenCategoryList = async (set: Function) => {
  const { data } = await request('top10Category', {})

  if (data) {
    set({ categoryList: data })
  }
}

export default shoppingStore
