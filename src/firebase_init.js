// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUP0ySAcK7uA1AHbuP1S26LNMQVHMxrUk",
  authDomain: "fs-education-consultancy.firebaseapp.com",
  projectId: "fs-education-consultancy",
  storageBucket: "fs-education-consultancy.appspot.com",
  messagingSenderId: "298029428574",
  appId: "1:298029428574:web:16452bc67665b8bb26a9cf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
