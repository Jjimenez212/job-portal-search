// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcguzO3nPL1avc-ribtR6phfYPcDlu4Jc",
  authDomain: "online-job-portal-e4f33.firebaseapp.com",
  projectId: "online-job-portal-e4f33",
  storageBucket: "online-job-portal-e4f33.appspot.com",
  messagingSenderId: "1048052779282",
  appId: "1:1048052779282:web:35a20dc0f53d10da3dcbcb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};