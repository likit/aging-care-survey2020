import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            loggedIn: false,
            data: null,
        },
        form: {
            createdBy: null,
            id: null,
            createdDate: null,
            lastUpdate: null,
            recordedDate: null,
            infoProvider: {
                is: null,
                relationship: null,
                duration: 0,
            },
        }
    },
    getters: {
        user(state) {
            return state.user;
        }
    },
    mutations: {
        logginUser(state, value) {
            state.user.loggedIn = value;
        },
        setUser(state, data) {
            state.user.data = data;
        },
        SET_LAST_UPDATE(state) {
            state.form.lastUpdate = new Date()
        },
        SET_RECORDED_DATE(state, recordedDate) {
            state.form = Object.assign({}, state.form, recordedDate)
        },
        SET_INFO_PROVIDER(state, is) {
            state.form.infoProvider = Object.assign({}, state.form.infoProvider, is)
        },
        SET_INFO_PROVIDER_RELATIONSHIP(state, relationship) {
            state.form.infoProvider = Object.assign({}, state.form.infoProvider, relationship)
        },
        SET_INFO_PROVIDER_DURATION(state, duration) {
            state.form.infoProvider = Object.assign({}, state.form.infoProvider, duration)
        }
    },
    actions: {
        fetchUser({ commit }, user) {
            commit("logginUser", user != null);
            if (user) {
                commit("setUser", {
                    email: user.email
                })
            } else {
                commit("setUser", null)
            }
        }
    },
    modules: {}
})
