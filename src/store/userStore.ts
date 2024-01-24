import { create } from 'zustand'
import { request } from '@src/utils/request'
import { ToastAndroid } from 'react-native'
import { save } from '.'

const userStore = create((set) => ({
  userInfo: {},
  setUserInfo: (params: any) => requestLogin(params, set)
}))

const requestLogin = async (params: any, set: Function): Promise<string> => {
  const res = await request('login', params)

  if (res?.data) {
    set({ userInfo: res.data })
    save('userInfo', JSON.stringify(res.data))
    return 'success'
  } else {
    ToastAndroid.show('登录失败', ToastAndroid.SHORT)
    return 'failed'
  }
}

export default userStore
