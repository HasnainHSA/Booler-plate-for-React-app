// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCuTThBvqF9bKdBAIax39dN3-Kv1hzwGDo",
  authDomain: "hackathon-react-app-d3f21.firebaseapp.com",
  projectId: "hackathon-react-app-d3f21",
  storageBucket: "hackathon-react-app-d3f21.appspot.com",
  messagingSenderId: "765713626038",
  appId: "1:765713626038:web:56bd89a85f8d9810ac0717",
  measurementId: "G-E2LK07PFVQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
