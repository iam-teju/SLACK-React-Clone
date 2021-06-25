import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCT2deHbZnJMSSd-ffhoc93zA-kXvT3n48",
    authDomain: "slack-clone-32a41.firebaseapp.com",
    projectId: "slack-clone-32a41",
    storageBucket: "slack-clone-32a41.appspot.com",
    messagingSenderId: "998148789248",
    appId: "1:998148789248:web:8f55ef6526b1507424b4e5",
    measurementId: "G-C80CPRPHDR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };;
  export default db;