import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAvH48eE2vl5N0JMUZtRony4RF75Zl2Mg",
  authDomain: "muno-clothing.firebaseapp.com",
  projectId: "muno-clothing",
  storageBucket: "muno-clothing.appspot.com",
  messagingSenderId: "953488615110",
  appId: "1:953488615110:web:cac581bc8e53f51d0b19c7",
};

initializeApp(firebaseConfig);

export const auth = getAuth();
