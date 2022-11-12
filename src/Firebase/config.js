import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBaN3EJH41mjmhNuGnlP_Ei0ZSc3EL1AwE",
    authDomain: "fir-ae670.firebaseapp.com",
    projectId: "fir-ae670",
    storageBucket: "fir-ae670.appspot.com",
    messagingSenderId: "398051055296",
    appId: "1:398051055296:web:dc0b7b1931e3542ca7ff25",
    measurementId: "G-36F45EVS2W"
  };

export default firebase.initializeApp(firebaseConfig);