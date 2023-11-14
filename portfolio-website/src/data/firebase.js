import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD50Diz7cIaYFhpVJkbyZmu86UHk3PSsFo",
  authDomain: "portfolio-website-koustav.firebaseapp.com",
  projectId: "portfolio-website-koustav",
  storageBucket: "portfolio-website-koustav.appspot.com",
  messagingSenderId: "493525026747",
  appId: "1:493525026747:web:5e4bf95f7354f9abffe69e",
  measurementId: "G-0P768QF52J",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messageDB = getFirestore(app);

export {messageDB};