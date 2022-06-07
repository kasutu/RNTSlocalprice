// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMywhVvvgrd8B_GCeg4WJecEtTq-D6JQI",
  authDomain: "localprice-181a1.firebaseapp.com",
  projectId: "localprice-181a1",
  storageBucket: "localprice-181a1.appspot.com",
  messagingSenderId: "1095952306351",
  appId: "1:1095952306351:web:5006f296cb04c1f9ce445a",
  measurementId: "G-BV86PYCRLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage()