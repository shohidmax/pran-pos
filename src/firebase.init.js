// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
  // apiKey: "AIzaSyBRGQvX8dWfKL7pHP9XBTqv0TaKwKwhHuQ",
  // authDomain: "pran-pos.firebaseapp.com",
  // projectId: "pran-pos",
  // storageBucket: "pran-pos.appspot.com",
  // messagingSenderId: "232805801170",
  // appId: "1:232805801170:web:037dff9b4574b968b2e10b",
  // measurementId: "G-NB7EBXCTPJ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);





import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {

  apiKey: "AIzaSyBRGQvX8dWfKL7pHP9XBTqv0TaKwKwhHuQ",
  authDomain: "pran-pos.firebaseapp.com",
  projectId: "pran-pos",
  storageBucket: "pran-pos.appspot.com",
  messagingSenderId: "232805801170",
  appId: "1:232805801170:web:037dff9b4574b968b2e10b",
  measurementId: "G-NB7EBXCTPJ"

};
const app = initializeApp(firebaseConfig); 
const auth = getAuth(app);
export default auth;
 


