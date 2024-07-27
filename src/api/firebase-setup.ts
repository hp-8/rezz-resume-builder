import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";


const firebaseConfig = {
  apiKey: "AIzaSyAvYtRPO_zRfQSOGZFrLBzl5pHWjAjPOLw",
  authDomain: "rezz-6849c.firebaseapp.com",
  projectId: "rezz-6849c",
  storageBucket: "rezz-6849c.appspot.com",
  messagingSenderId: "990345300952",
  appId: "1:990345300952:web:c2a7f0166f2059b9d880ad",
  measurementId: "G-NV9NS4BPSF"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);
export const functions = getFunctions(firebaseApp);

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  connectFunctionsEmulator(functions, "localhost", 5001);
}
