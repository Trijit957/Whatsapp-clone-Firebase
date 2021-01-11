import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCmvnIUGKaJPJzNZg8gvFE2IYI9zaT2_mk",
    authDomain: "whatsapp-clone-176af.firebaseapp.com",
    projectId: "whatsapp-clone-176af",
    storageBucket: "whatsapp-clone-176af.appspot.com",
    messagingSenderId: "595277397747",
    appId: "1:595277397747:web:ec9e0e3fb6d2c523128186",
    measurementId: "G-8S6K0ZX2BV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export { db as default, auth, provider };
  