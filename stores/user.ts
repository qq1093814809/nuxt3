export const userStore = defineStore('user', {
  state: () => ({
    name: '',
    phone: '',
    token: ''
  }),
  getters: {
    namePlus: state => {
      return state.name + 'plus'
    }
  },
  actions: {},
  // 本地存储持久化
  persist: process.client && {
    storage: localStorage
  }
})
