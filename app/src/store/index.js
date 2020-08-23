import Vue from 'vue'
import Vuex from 'vuex'
import {userProfiles} from "@/firebase";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            loggedIn: false,
            data: null,
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
    },
    mutations: {
        logginUser(state, value) {
            state.user.loggedIn = value;
        },
        setUser(state, data) {
            state.user.data = data;
        },
        setUserProfile(state, doc) {
            state.userProfile.id = doc.id
            state.userProfile.data = doc.data()
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
        },
        fetchProfile({ commit }, email) {
            userProfiles.where('email', '==', email).get().then(
                (snapshot)=>{
                    console.log(snapshot.docs[0])
                    commit('setUserProfile', snapshot.docs[0])
                }
            ).catch(()=> {
                this.$buefy.dialog.alert({
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
                ()=>{ commit('setUserProfile', profile) }
            ).catch((error)=>{
                console.log(error)
            })
        }
    },
    modules: {}
})
