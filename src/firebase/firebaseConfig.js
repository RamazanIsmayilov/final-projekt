import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyADNfDdhOxOARJnNTmGOhd5X9NulSkgwlc",
  authDomain: "final-project-e4589.firebaseapp.com",
  databaseURL: "https://final-project-e4589-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "final-project-e4589",
  storageBucket: "final-project-e4589.appspot.com",
  messagingSenderId: "637070668995",
  appId: "1:637070668995:web:b2e922e63805e9a0665e76",
  measurementId: "G-BL4TESC5VB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default }