import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentStatus: '',
    statusOptions: []
  },
  mutations: {
    'set_current_status' (state: any, currentStatus?: string) {
      // console.log(currentStatus)
      if (!currentStatus && state.statusOptions.length > 0) {
        state.currentStatus = state.statusOptions[0].label
        return
      }
      state.currentStatus = currentStatus
    },

    'add_status_option' (state: any, obj?: object) {
      state.statusOptions.push(obj)
    },

    'delete_current_status' (state: any, statusName: string) {
      if (state.statusOptions.length === 0) {
        return
      }
      state.statusOptions = state.statusOptions.filter((item: any) => {
        return item.value !== statusName
      })
      // console.log(state.statusOptions)
    }
  },
  actions: {
  },
  modules: {
  }
})
