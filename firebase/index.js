// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

//Edit for databsae securement
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_api_key,
  authDomain: "family-t.firebaseapp.com",
  projectId: "family-t",
  storageBucket: "family-t.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_sender_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_app_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_messurement_ID
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);