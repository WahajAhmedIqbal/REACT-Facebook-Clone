import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAcvsOVBaA40ahLrckpTm8cj6GBWKu715s",
  authDomain: "facebook-clone-ef3e1.firebaseapp.com",
  databaseURL: "https://facebook-clone-ef3e1.firebaseio.com",
  projectId: "facebook-clone-ef3e1",
  storageBucket: "facebook-clone-ef3e1.appspot.com",
  messagingSenderId: "356138527355",
  appId: "1:356138527355:web:c9bee0222c4420795590de",
  measurementId: "G-Y8QH92MX8M",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
