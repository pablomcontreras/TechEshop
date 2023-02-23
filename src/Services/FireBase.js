import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDLFiGOAQoGGghXR_--yS-9_l-5VBJqtM",
  authDomain: "tpfinalreactjs-b6074.firebaseapp.com",
  projectId: "tpfinalreactjs-b6074",
  storageBucket: "tpfinalreactjs-b6074.appspot.com",
  messagingSenderId: "1032420137199",
  appId: "1:1032420137199:web:73933dbc6ffa89d4c0e31a",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;