import Vue from 'vue'
import Vuex from 'vuex'
import {userProfiles, forms, hospitals} from "@/firebase";

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
            hospitalName: null,
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
                pntTreamentGalantamine: null,
                pntTreamentMemantine: null,
                pntTreatmentOthers: null,
                pntTreatmentOthersNote: null,
                pntTreatmentDurationYear: 0,
                pntTreatmentDurationMonth: 0,
                pntTreatmentDurationDay: 0,
                pntHealthServiceHomeOnly: null,
                pntHealthServiceDayOnly: null,
                pntHealthServiceOther: null,
                pntHealthServiceOtherNote: null
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
                    {
                        gender: null, timeTaken: null, shelterCost: null,
                        transportCost: null, foodCost: null, personOther: null, otherCost: null
                    },
                    {
                        gender: null, timeTaken: null, shelterCost: null,
                        transportCost: null, foodCost: null, personOther: null, otherCost: null
                    },
                    {
                        gender: null, timeTaken: null, shelterCost: null,
                        transportCost: null, foodCost: null, personOther: null, otherCost: null
                    },
                ],
                serviceProviders: [
                    {times: null, name: null, totalCost: null},
                    {times: null, name: null, totalCost: null},
                    {times: null, name: null, totalCost: null},
                    {times: null, name: null, totalCost: null},
                ],
                otherServiceProvider: null,
                needHelpFromFamily: null,
                familyHelper: {
                    gender: null,
                    frequency: null,
                    timePerHelp: null,
                    duration: null,
                    age: null
                },
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
            },
            overheads: {
                equipmentType: null,
                lifespan: null,
                price: null,
                purchasedYear: null,
                amount: null,
                totalCost: null,
                depreciationPerYear: null,
                capPerYear: null,
                activeStep: 1,
                dayCareServiceFees: [
                    {
                        wage: null,
                        positionAllowance: null,
                        overTime: null,
                        healthCoverage: null,
                        otherAllowance: null,
                        tip: null
                    },
                    {
                        wage: null,
                        positionAllowance: null,
                        overTime: null,
                        healthCoverage: null,
                        otherAllowance: null,
                        tip: null
                    },
                    {
                        wage: null,
                        positionAllowance: null,
                        overTime: null,
                        healthCoverage: null,
                        otherAllowance: null,
                        tip: null
                    },
                    {
                        wage: null,
                        positionAllowance: null,
                        overTime: null,
                        healthCoverage: null,
                        otherAllowance: null,
                        tip: null
                    },
                    {
                        wage: null,
                        positionAllowance: null,
                        overTime: null,
                        healthCoverage: null,
                        otherAllowance: null,
                        tip: null
                    },
                ],
                homeCareServiceFees: [
                    {
                        wage: null,
                        positionAllowance: null,
                        overTime: null,
                        healthCoverage: null,
                        otherAllowance: null,
                        tip: null
                    },
                    {
                        wage: null,
                        positionAllowance: null,
                        overTime: null,
                        healthCoverage: null,
                        otherAllowance: null,
                        tip: null
                    },
                    {
                        wage: null,
                        positionAllowance: null,
                        overTime: null,
                        healthCoverage: null,
                        otherAllowance: null,
                        tip: null
                    },
                    {
                        wage: null,
                        positionAllowance: null,
                        overTime: null,
                        healthCoverage: null,
                        otherAllowance: null,
                        tip: null
                    },
                    {
                        wage: null,
                        positionAllowance: null,
                        overTime: null,
                        healthCoverage: null,
                        otherAllowance: null,
                        tip: null
                    },
                ],
                dayCareEquipments: [
                    {amount: null, costPerItem: null, total: null},
                    {amount: null, costPerItem: null, total: null},
                    {amount: null, costPerItem: null, total: null},
                    {amount: null, costPerItem: null, total: null}
                ],
                homeCareEquipments: [
                    {amount: null, costPerItem: null, total: null},
                    {amount: null, costPerItem: null, total: null},
                    {amount: null, costPerItem: null, total: null},
                    {amount: null, costPerItem: null, total: null},
                    {amount: null, costPerItem: null, total: null}
                ],
            },
            EQ5D5L: {
                walk: null,
                selfcare: null,
                routine: null,
                pain: null,
                depression: null,
            },
            vas: 0,
            mmse: {
                timeOrientation: {
                    q1_1: {
                        answer: null,
                        correct: null
                    },
                    q1_2: {
                        answer: null,
                        correct: null
                    },
                    q1_3: {
                        answer: null,
                        correct: null
                    },
                    q1_4: {
                        answer: null,
                        correct: null
                    },
                    q1_5: {
                        answer: null,
                        correct: null
                    },
                },
                placeOrientation: {
                    location: null,
                    q2_1_1: {
                        answer: null,
                        correct: null,
                    },
                    q2_1_2: {
                        answer: null,
                        correct: null,
                    },
                    q2_1_3: {
                        answer: null,
                        correct: null,
                    },
                    q2_1_4: {
                        answer: null,
                        correct: null,
                    },
                    q2_1_5: {
                        answer: null,
                        correct: null,
                    },
                    q2_2_1: {
                        answer: null,
                        correct: null,
                    },
                    q2_2_2: {
                        answer: null,
                        correct: null,
                    },
                    q2_2_3: {
                        answer: null,
                        correct: null,
                    },
                    q2_2_4: {
                        answer: null,
                        correct: null,
                    },
                    q2_2_5: {
                        answer: null,
                        correct: null,
                    },
                },
                registration: {
                    recent: {
                        item1: null,
                        item2: null,
                        item3: null,
                        correct: null
                    },
                    present: {
                        item1: null,
                        item2: null,
                        item3: null,
                        correct: null
                    }
                },
                calculation: {
                    answer1: null,
                    answer2: null,
                    answer3: null,
                    answer4: null,
                    answer5: null,
                },
                attention: {
                    answer1: null,
                    answer2: null,
                    answer3: null,
                    answer4: null,
                    answer5: null,
                },
                attentionAndCalculation: {
                    calculatable: null,
                    correct: null
                },
                recall: {
                    recent: {
                        item1: null,
                        item2: null,
                        item3: null,
                        correct: null
                    },
                    present: {
                        item1: null,
                        item2: null,
                        item3: null,
                        correct: null
                    }
                },
                naming: {
                    q6_1: {
                        answer: null,
                        correct: null
                    },
                    q6_2: {
                        answer: null,
                        correct: null
                    },
                },
                repetition: {
                    answer: null,
                    correct: null
                },
                verbal: {
                    item1: null,
                    item2: null,
                    item3: null,
                    correct: null
                },
                written: {
                    correct: null
                },
                writing: {
                    sentence: null,
                    meaningful: null
                },
                visuo: {
                    correct: null
                }
            }
        },
        form: {},
        cleanHospitalInfo: {
            name: null,
            address: null,
            phone: null,
            numBed: null,
            level: null,
            standard: null,
        },
        hospitalInfo: {},
        hospitals: []
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
        RESET_HOSPITAL_INFO(state) {
            state.hospitalInfo = state.cleanHospitalInfo
        },
        ADD_HOSPITAL(state, hospital) {
            state.hospitals.push(hospital)
        },
        SET_HOSPITAL_ID(state, hid) {
            state.hospitalInfo.id = hid
        },
        SET_HOSPITAL_INFO(state, info) {
            state.hospitalInfo = info
        }
    },
    actions: {
        fetchUser({commit}, user) {
            if (user) {
                commit("SET_CURRENT_USER", user.email)
                commit("SET_LOGIN_TRUE")
            }
        },
        fetchHospitals({commit, state}) {
            if (state.hospitals.length === 0) {
                hospitals.get().then(
                    (snapshot) => {
                        snapshot.forEach((h) => {
                            let hosData = h.data()
                            hosData['id'] = h.id
                            commit('ADD_HOSPITAL', hosData)
                        })
                    }
                ).catch(() => {
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
            }
        },
        fetchProfile({commit}, email) {
            let self = this;
            userProfiles.where('email', '==', email).get().then(
                (snapshot) => {
                    console.log(snapshot.docs[0])
                    commit('SET_USER_PROFILE_DATA', snapshot.docs[0])
                }
            ).catch(() => {
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
        updateUserProfile({commit}, profile) {
            userProfiles.doc(profile.id).update(profile.data).then(
                () => {
                    commit('SET_USER_PROFILE_DATA', profile)
                }
            ).catch((error) => {
                console.log(error)
            })
        },
        updateFormCreator({commit}) {
            commit('SET_FORM_CREATOR')
        },
        loadForm({commit}, formId) {
            forms.doc(formId).get().then((doc) => {
                if (doc.exists) {
                    commit('SET_CURRENT_FORM', doc.data())
                    commit('SET_FORM_ID', doc.id)
                    commit('SET_FORM_CREATED_DATE', new Date(doc.data().createdDate.toDate()))
                    commit('SET_FORM_LAST_UPDATE', new Date(doc.data().lastUpdate.toDate()))
                    commit('SET_RECORDED_DATE', new Date(doc.data().recordedDate.toDate()))
                    if (doc.data().patientRecord.pntAdmittedDate !== null)
                        commit('SET_ADMITTED_DATE', new Date(doc.data().patientRecord.pntAdmittedDate.toDate()))
                    if (doc.data().patientRecord.pntDischargedDate)
                        commit('SET_DISCHARGED_DATE', new Date(doc.data().patientRecord.pntDischargedDate.toDate()))
                }
            })
        },
        saveForm({commit, state}) {
            commit('SET_FORM_CREATOR')
            if (state.form.id !== null) {
                commit('SET_FORM_LAST_UPDATE', new Date())
                forms.doc(state.form.id).set(state.form)
            } else {
                commit('SET_FORM_CREATED_DATE', new Date())
                commit('SET_FORM_LAST_UPDATE', new Date())
                forms.add(state.form).then((docRef) => {
                    commit('SET_FORM_ID', docRef.id)
                })
            }
        },
        saveHospital({state, commit}) {
            if (state.hospitalInfo.id !== null) {
                hospitals.doc(state.hospitalInfo.id).set(state.hospitalInfo)
            } else {
                hospitals.add(state.hospitalInfo).then((docRef) => {
                    commit('SET_HOSPITAL_ID', docRef.id)
                })
            }
        },
        createNewRecord({commit}) {
            commit('RESET_FORM')
        },
        logoutUser({commit}) {
            commit('CLEAR_USER_PROFILE')
            commit('SET_CURRENT_USER', null)
            commit('SET_LOGIN_FALSE')
        },
        resetHospitalInfo({commit}) {
            commit('RESET_HOSPITAL_INFO')
        },
        setCurrentHospital({commit}, hospital){
            commit('SET_HOSPITAL_INFO', hospital)
        }
    },
    modules: {}
})
