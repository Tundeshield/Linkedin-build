import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCp9wsNnFwcwPdkRZKuKZq4cf_m0EJIDeo",
    authDomain: "linkedin-design.firebaseapp.com",
    projectId: "linkedin-design",
    storageBucket: "linkedin-design.appspot.com",
    messagingSenderId: "893574567734",
    appId: "1:893574567734:web:ce79cc5e3db772d1b14597",
    measurementId: "G-0Y6T0LSYP5"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth=firebase.auth();
  export {db, auth};