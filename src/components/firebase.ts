import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLxkJ2xrbXVk1jrXFoF0_okHpvpL6PVFg",
  authDomain: "project-mau-227ed.firebaseapp.com",
  projectId: "project-mau-227ed",
  storageBucket: "project-mau-227ed.appspot.com",
  messagingSenderId: "3574141911",
  appId: "1:3574141911:web:8f3ff8083f4f3941cdb192"
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const insertDocument = (cName: string, doc: any) =>
  addDoc(collection(db, cName), doc);