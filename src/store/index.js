import Vue from 'vue'
import Vuex from 'vuex'
/*import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'*/

Vue.use(Vuex);

const state = JSON.parse(localStorage.getItem('user')) || {};

const mutations = {
	LOGINOUT(state,payload){
		localStorage.removeItem('user');
		state.loginname = '';
		state.accesstoken = '';
	},
	LOGININ(state,payload){
		localStorage.setItem('user',JSON.stringify(payload));
		state.loginname = payload.loginname;
		state.accesstoken = payload.accesstoken;
	},
}

const actions = {
	logginout({commit},payload){
		commit('LOGINOUT');
	},
	logginin({commit},payload){
		commit('LOGININ',payload);
	}
}

const getters = {

}


export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
});