
import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyDkzv_c8Vz7rzRkrFFcDOTz9KdbTF6Fg4c",
    authDomain: "whatsapp2-f48bf.firebaseapp.com",
    projectId: "whatsapp2-f48bf",
    storageBucket: "whatsapp2-f48bf.appspot.com",
    messagingSenderId: "1024630025235",
    appId: "1:1024630025235:web:e137d0a7aa2b6b6e9a23e6"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};

  export default db;
