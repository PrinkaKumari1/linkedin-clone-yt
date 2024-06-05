import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDrRpimq6NSUVIWj4JQGkDtLl5aNMTxAOo",
    authDomain: "linkedin-clone-yt-80664.firebaseapp.com",
    projectId: "linkedin-clone-yt-80664",
    storageBucket: "linkedin-clone-yt-80664.appspot.com",
    messagingSenderId: "1088815002983",
    appId: "1:1088815002983:web:abafb24db3346f39e3ebc2",
    measurementId: "G-Z1VRECPCY5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
