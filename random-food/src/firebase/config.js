// src/firebase/config.js
//  ใส่ Firebase config ของคุณที่นี่


import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth, browserLocalPersistence, setPersistence } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDY6YosE1ejNVRDMWEfi0EUTxyCP4SlInc",
  authDomain: "random-food-2503a.firebaseapp.com",
  projectId: "random-food-2503a",
  storageBucket: "random-food-2503a.firebasestorage.app",
  messagingSenderId: "1022033621588",
  appId: "1:1022033621588:web:8de956a19ac0232b9533c1",
  measurementId: "G-FTYWTV67ZT"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app
setPersistence(auth, browserLocalPersistence).catch(console.error)
