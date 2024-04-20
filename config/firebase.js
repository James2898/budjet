import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNi52PL7eY98TRRk-GsKa6jJ6yrG7x0tc",
  authDomain: "badjet.firebaseapp.com",
  projectId: "badjet",
  storageBucket: "badjet.appspot.com",
  messagingSenderId: "1001823520044",
  appId: "1:1001823520044:web:fe6eb4c94eba6e941ed889",
  // measurementId: "G-L7287DRQJB"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
