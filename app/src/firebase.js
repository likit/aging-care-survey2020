import * as firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDEejeG9TYImYxyv8mqKaCH4KQLpekTcps",
    authDomain: "aging-care-survey2020.firebaseapp.com",
    databaseURL: "https://aging-care-survey2020.firebaseio.com",
    projectId: "aging-care-survey2020",
    storageBucket: "aging-care-survey2020.appspot.com",
    messagingSenderId: "218479953175",
    appId: "1:218479953175:web:c59ade5082e1c1de106352",
    measurementId: "G-6PDBZ7RV3G"
  };

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()
const userProfiles = db.collection('profiles')
const forms = db.collection('forms')
const hospitals = db.collection('hospitals')

export {
    firebase as fb,
    db,
    auth,
    userProfiles,
    forms,
    hospitals
};