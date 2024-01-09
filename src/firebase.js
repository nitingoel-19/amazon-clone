
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCUhKIxJ5EfObJhpZBDvyDTRZ0vEtGrmzs",
  authDomain: "clone-175d4.firebaseapp.com",
  projectId: "clone-175d4",
  storageBucket: "clone-175d4.appspot.com",
  messagingSenderId: "32926917892",
  appId: "1:32926917892:web:ee0b37aa1ddd118d191c51",
  measurementId: "G-1EY80ZEWCG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };