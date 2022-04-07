import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDkvtMRkO6gNd0E4I5vfDpltFdGP61NBow",
    authDomain: "pato-react.firebaseapp.com",
    projectId: "pato-react",
    storageBucket: "pato-react.appspot.com",
    messagingSenderId: "526600253740",
    appId: "1:526600253740:web:8775c8209165b99f323c89"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);