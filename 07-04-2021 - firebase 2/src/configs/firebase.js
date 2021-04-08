import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyB6dKQDgR2V5nAQz1Wj3joEXvQP6R9Qh4U",
  authDomain: "haroldreyes-29693.firebaseapp.com",
  projectId: "haroldreyes-29693",
  storageBucket: "haroldreyes-29693.appspot.com",
  messagingSenderId: "919420217151",
  appId: "1:919420217151:web:062079d89d8beb0eb2958a",
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}
