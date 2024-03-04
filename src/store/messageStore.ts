import { create } from 'zustand'
import { request } from '@src/utils/request'
import Loading from '@src/components/widget/Loading'
import { IMessageStore, IUnReadList, MessageListItem } from './type'

const SIZE = 10
const messageStore = create<IMessageStore>((set, get) => ({
  messageList: [] as MessageListItem[],
  setMessageList: () => requestMessageList(set, get),
  page: 1,
  size: SIZE,
  refreshing: false,
  unReadList: {} as IUnReadList,
  setRequestUnReadList: () => requestUnReadList(set)
}))

const requestMessageList = async (set: Function, get: Function) => {
  const { page, size, messageList, isRefreshing } = get()

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
    const { data } = await request('messageList', params)
    // 数据处理逻辑
    if (data && data.length > 0) {
      set({
        messageList: page === 1 ? data : [...messageList, ...data],
        page: page + 1
      })

    } else if (page === 1) {
      set({ messageList: [] })
    }
  } catch (error) {
    console.log(error)
  } finally {
    set({ isRefreshing: false })
    Loading.hide()
  }
}

const requestUnReadList = async (set: Function) => {
  const { data } = await request('unread', {})

  if (data) {
    set({ unReadList: data })
  }
}

export default messageStore