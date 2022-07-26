import {initializeApp} from "firebase/app";
import { getFirestore,  getDoc, collection, where, addDoc, getDocs, setDoc } from "firebase/firestore";
import {getAuth} from 'firebase/auth'

const firebaseApp = initializeApp({
    apiKey: "AIzaSyCesiYV6A-ImqpDL5gpcRO7k1JpfxHjCPk",
    authDomain: "artist-platform-react.firebaseapp.com",
    projectId: "artist-platform-react",
    storageBucket: "artist-platform-react.appspot.com",
    messagingSenderId: "1049221285001",
    appId: "1:1049221285001:web:f263a0eebcaf50cd0df258",
    measurementId: "G-2HKSH5G86M"
});

const db = getFirestore(firebaseApp);
export { db,getAuth, getFirestore, collection, getDoc, getDocs };





// databaseURL: "https://artist-platform-react.firebaseio.com", 