
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyAZ4ytK7BE7NoKeN8pD6rzOzGvmBGOqGbI",
  authDomain: "react-notes-e59e9.firebaseapp.com",
  projectId: "react-notes-e59e9",
  storageBucket: "react-notes-e59e9.appspot.com",
  messagingSenderId: "717191203696",
  appId: "1:717191203696:web:b4d78bdcd7f443eba05db5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")