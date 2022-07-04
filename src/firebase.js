// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAobymTetG2ZwNuGU6vPG9JVgv1WTqA-Qk",
  authDomain: "clone-f71fb.firebaseapp.com",
  projectId: "clone-f71fb",
  storageBucket: "clone-f71fb.appspot.com",
  messagingSenderId: "889260787747",
  appId: "1:889260787747:web:aaecf406c3ad5de2c14996",
  measurementId: "G-VLFXEY9KD1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
