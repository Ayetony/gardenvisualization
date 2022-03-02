import Vue from "vue";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
    currBtnName: '', // 当前的导航按钮
    btnName: ''
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
