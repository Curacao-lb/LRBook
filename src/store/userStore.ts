import { create } from 'zustand'
import { request } from '@src/utils/request'
import { save } from '.'
import Toast from '@src/components/widget/Toast'
import Loading from '@src/components/widget/Loading'

const userStore = create((set) => ({
  userInfo: {},
  setUserInfo: (params: any) => requestLogin(params, set),
  directSetUserInfo: (info: any) => set({ userInfo: info }),
}))

const requestLogin = async (params: any, set: Function): Promise<string> => {
  Loading.show()
  const res = await request('login', params)

  if (res?.data) {
    set({ userInfo: res.data })
    save('userInfo', JSON.stringify(res.data))
    Loading.hide()
    return 'success'
  } else {
    Toast.show('登录失败，请检查用户名和密码')
    Loading.hide()
    return 'failed'
  }
}

export default userStore
