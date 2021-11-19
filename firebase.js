// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3svjiXYzmBTv0DRqzdcajqU44BeX8KI4",
  authDomain: "insta-2-yt-fb354.firebaseapp.com",
  projectId: "insta-2-yt-fb354",
  storageBucket: "insta-2-yt-fb354.appspot.com",
  messagingSenderId: "547910765047",
  appId: "1:547910765047:web:fd7d04ace05e57d0dec6f2",
  measurementId: "G-5T29YLDKSV",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
