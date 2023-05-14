import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAnJqBza1QXiZjrqvu33HI4pj86lMX6ku0",
  authDomain: "companywebsite-a1f9d.firebaseapp.com",
  projectId: "companywebsite-a1f9d",
  storageBucket: "companywebsite-a1f9d.appspot.com",
  messagingSenderId: "206459445631",
  appId: "1:206459445631:web:d3e0b8ef8cce8b360fba4a",
  measurementId: "G-891MFXTVR5"
};

const FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore()

export default {FirebaseApp,db}

