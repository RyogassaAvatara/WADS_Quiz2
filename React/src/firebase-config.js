// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJEAFcBbi78IWuQ91NLJ22XXzYv3hAqnM",
  authDomain: "authmultipage.firebaseapp.com",
  projectId: "authmultipage",
  storageBucket: "authmultipage.appspot.com",
  messagingSenderId: "98145131291",
  appId: "1:98145131291:web:21ade91ad4bdcbd93a11be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const Auth = getAuth(app);
export const Provider = new GoogleAuthProvider();