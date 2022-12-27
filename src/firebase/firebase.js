import { initializeApp } from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKUzXswqnOZNILZCXb5Jm6sp4JW7waABg",
  authDomain: "tishreen-62882.firebaseapp.com",
  databaseURL: "https://tishreen-62882-default-rtdb.firebaseio.com",
  projectId: "tishreen-62882",
  storageBucket: "tishreen-62882.appspot.com",
  messagingSenderId: "936898727421",
  appId: "1:936898727421:web:e4ae7a8592748dbf1cdd94",
  measurementId: "G-1VKB8MH6ZG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
