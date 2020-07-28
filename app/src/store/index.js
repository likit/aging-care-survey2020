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
                duration: null,
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
        SET_RECORDED_DATE(state, value) {
            state.form.recordedDate = value;
        },
        SET_INFO_PROVIDER(state, value) {
            state.form.infoProvider.is = value;
        },
        SET_INFO_PROVIDER_RELATIONSHIP(state, value) {
            state.form.infoProvider.relationship = value;
        },
        SET_INFO_PROVIDER_DURATION(state, value) {
            state.form.infoProvider.duration = value;
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
