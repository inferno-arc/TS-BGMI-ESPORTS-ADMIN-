import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
  getAuth,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  serverTimestamp,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


const firebaseConfig = {

  apiKey:
    "AIzaSyD4Q9K8yuV91KfZ0_AZyCsXKwXZn2X1BKI",

  authDomain:
    "tsbgmi-esports.firebaseapp.com",

  projectId:
    "tsbgmi-esports",

  storageBucket:
    "tsbgmi-esports.firebasestorage.app",

  messagingSenderId:
    "398186419907",

  appId:
    "1:398186419907:web:5a84376390a33a4c167476",

  measurementId:
    "G-NVVTEMTE02"

};


const app =
  initializeApp(firebaseConfig);


const auth =
  getAuth(app);


const db =
  getFirestore(app);


export {

  app,

  auth,

  db,

  // Authentication
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  signOut,
  onAuthStateChanged,

  // Firestore
  collection,
  addDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  serverTimestamp,
  query,
  orderBy

};