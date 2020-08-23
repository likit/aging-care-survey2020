import Vue from 'vue'
import Vuex from 'vuex'
import {userProfiles} from "@/firebase";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            loggedIn: false,
            email: null,
        },
        userProfile: {
            id: null,
            data: {}
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
        isUserLoggedIn: (state) => {
            return state.user.loggedIn;
        }
    },
    mutations: {
        SET_LOGIN_TRUE(state) {
            state.user.loggedIn = true;
        },
        SET_LOGIN_FALSE(state) {
            state.user.loggedIn = false;
        },
        SET_CURRENT_USER(state, data) {
            state.user.email = data;
        },
        SET_USER_PROFILE_DATA(state, doc) {
            state.userProfile.id = doc.id
            state.userProfile.data = doc.data()
        },
        CLEAR_USER_PROFILE(state) {
            state.userProfile.id = null
            state.userProfile.data = {}
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
            if (user) {
                commit("SET_CURRENT_USER", user.email)
                commit("SET_LOGIN_TRUE")
            }
        },
        fetchProfile({ commit }, email) {
            let self = this;
            userProfiles.where('email', '==', email).get().then(
                (snapshot)=>{
                    console.log(snapshot.docs[0])
                    commit('SET_USER_PROFILE_DATA', snapshot.docs[0])
                }
            ).catch(()=> {
                self.$buefy.dialog.alert({
                    title: 'โปรแกรมมีปัญหาในการโหลดข้อมูล',
                    message: 'โปรแกรมไม่สามารถดาวน์โหลดข้อมูลทางอินเตอร์เน็ตได้ กรุณาตรวจสอบการเชื่อมต่อของท่านก่อนลองใช้งานอีกครั้ง',
                    type: 'is-danger',
                    hasIcon: true,
                    icon: 'times-circle',
                    iconPack: 'fa',
                    ariaRole: 'alertdialog',
                    ariaModal: true
                })
            })
        },
        updateUserProfile({ commit }, profile) {
            userProfiles.doc(profile.id).update(profile.data).then(
                ()=>{ commit('SET_USER_PROFILE_DATA', profile) }
            ).catch((error)=>{
                console.log(error)
            })
        },
        logoutUser({ commit }) {
            commit('CLEAR_USER_PROFILE')
            commit('SET_CURRENT_USER', null)
            commit('SET_LOGIN_FALSE')
        }
    },
    modules: {}
})
