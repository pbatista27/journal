import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyCjtJ_ucwdoaacMYOUW34Jd3MJA2jt0Yuw",
    authDomain: "react-prueba-ef08c.firebaseapp.com",
    databaseURL: "https://react-prueba-ef08c.firebaseio.com",
    projectId: "react-prueba-ef08c",
    storageBucket: "react-prueba-ef08c.appspot.com",
    messagingSenderId: "839591153214",
    appId: "1:839591153214:web:7d80c2b74b2329ddd60b6f"
  };
  
  firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
};
