import { create } from 'zustand'
import { request } from '@src/utils/request'
import Loading from '@src/components/widget/Loading'
import { ArticleSimple, IMineStore } from './type'

const mineStore = create<IMineStore>((set) => ({
  noteList: [] as ArticleSimple[],
  collectionList: [] as ArticleSimple[],
  favorateList: [] as ArticleSimple[],
  info: {} as any,
  refreshing: false,
  setList: () => requestAll(set)
}))

const requestAll = async (set: Function) => {
  Loading.show();
  set({ refreshing: true })
  Promise.all([
    requestNoteList(set),
    requestCollectionList(set),
    requestFavorateList(set),
    requestInfo(set),
  ]).then(() => {
    Loading.hide();
    set({ refreshing: false })
  });
}


const requestNoteList = async (set: Function) => {
  try {
    const { data } = await request('noteList', {});
    set({ noteList: data })
  } catch (error) {
    console.log(error);
  }
}

const requestCollectionList = async (set: Function) => {
  try {
    const { data } = await request('collectionList', {})
    set({ collectionList: data })
  } catch (error) {
    console.log(error);
  }
}

const requestFavorateList = async (set: Function) => {
  try {
    const { data } = await request('favorateList', {});
    set({ favorateList: data })
  } catch (error) {
    console.log(error);
  }
}

const requestInfo = async (set: Function) => {
  try {
    const { data } = await request('accountInfo', {});
    set({ info: data })
  } catch (error) {
    console.log(error);
  }
}

export default mineStore
