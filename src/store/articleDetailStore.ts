import { create } from 'zustand'
import { request } from '@src/utils/request'
import Loading from '@src/components/widget/Loading'
import { Article, IArticleDetail } from './type'

const articleDetailStore = create<IArticleDetail>((set) => ({
  details: {} as Article,
  setArticleDetails: ({ id }: { id: number }) => requestArticleDetails({ id }, set)
}))

const requestArticleDetails = async ({ id }: { id: number }, set: Function): Promise<void> => {
  Loading.show()
  try {
    const res = await request('articleDetail', { id })
    set({ details: res.data })
  } catch (err) {
    console.log(err)
  } finally {
    Loading.hide()
  }
}

export default articleDetailStore
