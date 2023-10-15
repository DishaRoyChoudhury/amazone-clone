import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXQmjVGhRXJP3ZoOdIjCZdXy53TzwuMqU",
  authDomain: "e-clone-39894.firebaseapp.com",
  projectId: "e-clone-39894",
  storageBucket: "e-clone-39894.appspot.com",
  messagingSenderId: "469927152304",
  appId: "1:469927152304:web:25f89c6486cc2a00d10975",
  measurementId: "G-0QRJE2XVBQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth =  firebase.auth();

export { db, auth};