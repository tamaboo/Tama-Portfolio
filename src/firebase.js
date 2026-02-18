import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyBux-wq6XVunQQg5DzaU63BTnxEoUgbZgE",
authDomain: "portofolio-rizqy.firebaseapp.com",
projectId: "portofolio-rizqy",
storageBucket: "portofolio-rizqy.firebasestorage.app",
messagingSenderId: "734324164512",
appId: "1:734324164512:web:32fe514960b88db92606c5",
measurementId: "G-4GVR99EZNB"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

export const db = getFirestore(app);