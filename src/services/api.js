import firebase from 'firebase'
import '@firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyAOXAC2Rrxxz2YBlOcj2Wfde_aIb_ciK1U",
  authDomain: "gorandom-febdf.firebaseapp.com",
  projectId: "gorandom-febdf",
  storageBucket: "gorandom-febdf.appspot.com",
  messagingSenderId: "912653694937",
  appId: "1:912653694937:web:b660cee36a9c70b2d5cbc8",
  measurementId: "G-95Z40XHEE5"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};