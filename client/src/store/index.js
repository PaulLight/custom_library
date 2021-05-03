import Vue from 'vue';
import Vuex from 'vuex';

import actions from './index/actions';
import mutations from './index/mutations';
import state from './index/state';
import getters from './index/getters';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state,
  mutations,
  actions,
  getters
});
