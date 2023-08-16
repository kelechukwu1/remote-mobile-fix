// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyA-4380SseAj0FW1s7rzfANsaQzK-3EWFU",
	authDomain: "remote-mobile-fix.firebaseapp.com",
	projectId: "remote-mobile-fix",
	storageBucket: "remote-mobile-fix.appspot.com",
	messagingSenderId: "412681526015",
	appId: "1:412681526015:web:cb3ee47a76ae0569014aca",
	measurementId: "G-8K93RCYDFG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
