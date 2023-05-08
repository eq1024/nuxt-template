import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const userName = ref('修改看看!这是来自pinia的默认值,同时也是title的值')
  function setNewName(name: string) {
    userName.value = name
  }

  return {
    setNewName,
    userName,
  }
})

// if (import.meta.hot)
//   import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
