import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAEoAlC9kGABTwVvMIqw9fQ4lgaq8fDhlE",
  authDomain: "anurag-portfolio-e6750.firebaseapp.com",
  projectId: "anurag-portfolio-e6750",
  storageBucket: "anurag-portfolio-e6750.appspot.com",
  messagingSenderId: "265213540032",
  appId: "1:265213540032:web:dcbd7210e0c819267e1f25",
  measurementId: "G-BQH15FF28W"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();