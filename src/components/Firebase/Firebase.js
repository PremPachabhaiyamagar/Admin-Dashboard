import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4MERFrMSmgIPR9xbiK0Q2Hnx3fCS6Hqw",
  authDomain: "admindashboard-c2037.firebaseapp.com",
  projectId: "admindashboard-c2037",
  storageBucket: "admindashboard-c2037.appspot.com",
  messagingSenderId: "224856111767",
  appId: "1:224856111767:web:e6fae5c27014582a0747d2",
  measurementId: "G-XEF6NPJ1KQ"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
