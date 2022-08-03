
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVXjqgsUyzmcK9zNmXKMRaQ1Wp1m4il5w",
  authDomain: "ecommerce-1c075.firebaseapp.com",
  projectId: "ecommerce-1c075",
  storageBucket: "ecommerce-1c075.appspot.com",
  messagingSenderId: "670528842708",
  appId: "1:670528842708:web:0761a9f782a86717054441",
  measurementId: "G-E60PCWQL7P"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function obtenerProductos (){

  const querySnapshot = await getDocs(collection(db, "productos"));
  console.log(querySnapshot);

}