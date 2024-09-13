import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyAZKQjH7RV6_MfgJ-rRqszsDqaPbtJ7Tls",
  authDomain: "kitchen-and-closet.firebaseapp.com",
  projectId: "kitchen-and-closet",
  storageBucket: "kitchen-and-closet.appspot.com",
  messagingSenderId: "105725141151",
  appId: "1:105725141151:web:7bcb668fbdb2a6c63702aa"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, firestore, auth, storage };

