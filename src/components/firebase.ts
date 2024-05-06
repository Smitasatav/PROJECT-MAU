import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB82EvAg1IaQiv7WE6UdmJMA72m8oiMHFo",
  authDomain: "react-mau-project.firebaseapp.com",
  projectId: "react-mau-project",
  storageBucket: "react-mau-project.appspot.com",
  messagingSenderId: "975956779335",
  appId: "1:975956779335:web:2917e846c7490894e7ac62",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const insertDocument = (cName: string, doc: any) =>
  addDoc(collection(db, cName), doc);
