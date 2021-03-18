import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB_smwbWM1AqQ2otF3dgRvIJy_oyqjG10E",
  authDomain: "slack-clone-d3f23.firebaseapp.com",
  projectId: "slack-clone-d3f23",
  storageBucket: "slack-clone-d3f23.appspot.com",
  messagingSenderId: "868676458121",
  appId: "1:868676458121:web:ad9bb577d594d2d8eb5858",
  measurementId: "G-XWV2JLRCEZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
