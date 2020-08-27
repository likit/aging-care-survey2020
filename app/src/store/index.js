import Vue from 'vue'
import Vuex from 'vuex'
import {userProfiles, forms} from "@/firebase";

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
        clean_form: {
            id: null,
            createdBy: null,
            createdDate: null,
            lastUpdate: null,
            recordedDate: null,
            infoProvider: {
                is: null,
                relationship: null,
                duration: 0,
            },
            patientRecord: {
                pntGender: null,
                pntPIN: null,
                pntAge: null,
                pntAddress: '',
                pntName: '',
                pntMarital: null,
                pntReligion: null,
                pntReligionNote: null,
                pntJob: null,
                pntJobNote: null,
                pntJobWage: null,
                pntEducation: null,
                pntHealthCoverage: null,
                pntHealthCoverageNote: null,
                pntHospitalTransferFrom: null,
                pntHospitalTransferFromNote: null,
                pntDiagnosis: null,
                pntComorbidity: null,
                pntComorbidityNote: null,
                pntComplication: null,
                pntComplicationNote: null,
                pntUnderlyingDisease: null,
                pntUnderlyingDiseaseNote: null,
                pntAdmittedDate: null,
                pntDischargedDate: null,
                pntDischargeReason: null,
                pntDischargeReasonNote: null,
                pntHospitalTransferTo: null,
                pntHospitalTransferToNote: null,
                pntDiagnosisDurationYear: 0,
                pntDiagnosisDurationMonth: 0,
                pntDiagnosisDurationDay: 0,
                pntTreatmentNoPharm: null,
                pntTreatmentPharm: null,
                pntTreatmentCognition: null,
                pntTreatmentEmotion: null,
                pntTreatmentStimulation: null,
                pntTreatmentBahavior: null,
                pntTreatmentCaregiver: null,
                pntTreamentDonepezil: null,
                pntTreamentRivastigmine: null,
                pntTreamentGalantime: null,
                pntTreamentMemantine: null,
                pntTreatmentOthers: null,
                pntTreatmentOthersNote: null,
                pntTreatmentDurationYear: 0,
                pntTreatmentDurationMonth: 0,
                pntTreatmentDurationDay: 0,
            },
            patientCapital: {
                noDayCareReceived: null,
                dayCareDurationDay: null,
                dayCareDurationHour: null,
                dayCareDurationMinute: null,
                shelterCost: null,
                shelterCostTotal: null,
                expense: null,
                foodExpense: null,
                extraExpense: null,
                hasCompany: null,
                companyNumber: null,
                companyPersons: [
                    {gender: null, timeTaken: null, shelterCost: null,
                        transportCost: null, foodCost: 3000, personOther: null, otherCost: null},
                    {gender: null, timeTaken: null, shelterCost: null,
                        transportCost: null, foodCost: 4000, personOther: null, otherCost: null},
                    {gender: null, timeTaken: null, shelterCost: null,
                        transportCost: null, foodCost: 500, personOther: null, otherCost: null},
                    ],
                otherServiceProvider: null,
                needHelpFromFamily: null,
                stayWithFamily: null,
                commuteCost: null,
                financialSupport: null,
                numPersonReceivingFinancialSupport: null,
                financialSupportSource: null,
                equipment: null,
                equipmentCost: null,
                assistantWage: null,
                maidWage: null,
                careGiverWage: null,
                providedStuff: null,
            }
        },
        form: {}
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
        RESET_FORM(state) {
            state.form = state.clean_form
        },
        SET_CURRENT_FORM(state, formData) {
            state.form = formData
        },
        SET_FORM_ID(state, id) {
            state.form.id = id
        },
        SET_FORM_CREATOR(state) {
            state.form.createdBy = state.user.email
        },
        SET_FORM_CREATED_DATE(state, created_at) {
            state.form.createdDate = created_at
        },
        SET_FORM_LAST_UPDATE(state, updated_at) {
            state.form.lastUpdate = updated_at
        },
        SET_ADMITTED_DATE(state, admittedDate) {
            state.form.patientRecord.pntAdmittedDate = admittedDate
        },
        SET_DISCHARGED_DATE(state, dischangedDate) {
            state.form.patientRecord.pntDischargedDate = dischangedDate
        },
        SET_LAST_UPDATE(state) {
            state.form.lastUpdate = new Date()
        },
        SET_RECORDED_DATE(state, recordedDate) {
            // state.form.recordedDate = Object.assign({}, state.form.recordedDate, recordedDate)
            state.form.recordedDate = recordedDate
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
        updateFormCreator({ commit }) {
            commit('SET_FORM_CREATOR')
        },
        loadForm({ commit }, formId) {
            forms.doc(formId).get().then((doc)=>{
                if (doc.exists) {
                    commit('SET_CURRENT_FORM', doc.data())
                    commit('SET_FORM_ID', doc.id)
                    commit('SET_FORM_CREATED_DATE', new Date(doc.data().createdDate.toDate()))
                    commit('SET_FORM_LAST_UPDATE', new Date(doc.data().lastUpdate.toDate()))
                    commit('SET_RECORDED_DATE', new Date(doc.data().recordedDate.toDate()))
                    commit('SET_ADMITTED_DATE',
                        new Date(doc.data().patientRecord.pntAdmittedDate.toDate()))
                    commit('SET_DISCHARGED_DATE',
                        new Date(doc.data().patientRecord.pntDischargedDate.toDate()))
                }
            })
        },
        saveForm({ commit, state }) {
            commit('SET_FORM_CREATOR')
            if (state.form.id !== null) {
                commit('SET_FORM_LAST_UPDATE', new Date())
                forms.doc(state.form.id).set(state.form)
            } else {
                commit('SET_FORM_CREATED_DATE', new Date())
                commit('SET_FORM_LAST_UPDATE', new Date())
                forms.add(state.form).then((docRef)=>{
                    commit('SET_FORM_ID', docRef.id)
                })
            }
        },
        createNewRecord({ commit }) {
            commit('RESET_FORM')
        },
        logoutUser({ commit }) {
            commit('CLEAR_USER_PROFILE')
            commit('SET_CURRENT_USER', null)
            commit('SET_LOGIN_FALSE')
        }
    },
    modules: {}
})
