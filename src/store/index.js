// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        runInfo: {}
    },
    mutations: {
        // 保存跑步信息
        saveRunInfo(state, data) {
            state.runInfo = data
        }
    }
})

export default store