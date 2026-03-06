import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaZJ3P8yPmOb--0XZ3YKf88UhpBwEergc",
  authDomain: "efdate-ba5f3.firebaseapp.com",
  projectId: "efdate-ba5f3",
  storageBucket: "efdate-ba5f3.firebasestorage.app",
  messagingSenderId: "997522252855",
  appId: "1:997522252855:web:8ed8285076df8dd5ef8bb2",
  measurementId: "G-23N00FGGBW",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
