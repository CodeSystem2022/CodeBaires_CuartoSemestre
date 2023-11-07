import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWy7h7kdynR8ydjAgquC0j9hEyXOF1Vz4",
  authDomain: "fir-react-6c386.firebaseapp.com",
  projectId: "fir-react-6c386",
  storageBucket: "fir-react-6c386.appspot.com",
  messagingSenderId: "87695501381",
  appId: "1:87695501381:web:593b2833bbc00af44d9b2c",
};


// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};
