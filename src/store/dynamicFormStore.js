import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import state from './stateGenerator'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: state,
    actions,
    mutations
});