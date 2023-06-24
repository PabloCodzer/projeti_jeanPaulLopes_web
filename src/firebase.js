// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN8aYCfpqeiux5RHtw9QMbsKLxM01B0AQ",
  authDomain: "cadastroitensvaridos.firebaseapp.com",
  projectId: "cadastroitensvaridos",
  storageBucket: "cadastroitensvaridos.appspot.com",
  messagingSenderId: "24050177627",
  appId: "1:24050177627:web:6b78be26dc2eafe77c917e",
  measurementId: "G-5W03JBMJRQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);