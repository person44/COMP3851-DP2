import { initializeApp } from 'firebase/app';
import { getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDk27I5gW2e4cUOthy68R3LD4y8c2nt0X8",
  authDomain: "comp3851-34ea0.firebaseapp.com",
  databaseURL: "https://comp3851-34ea0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "comp3851-34ea0",
  storageBucket: "comp3851-34ea0.appspot.com",
  messagingSenderId: "225939569628",
  appId: "1:225939569628:web:4507f593ae29aabd0a2d19"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase();



  