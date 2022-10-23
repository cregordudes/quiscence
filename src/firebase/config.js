// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCzTyRRBJoourS9t5i7FJ3xjF1YdeH9xm0",
  authDomain: "quiscence-704f0.firebaseapp.com",
  projectId: "quiscence-704f0",
  storageBucket: "quiscence-704f0.appspot.com",
  messagingSenderId: "386617088650",
  appId: "1:386617088650:web:be30eaa8b9416801bfab73",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
