// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyBEthj3YURhY8fu5HFWq5sTkhk2WLuVo0o",
    authDomain: "instagram-clone-57f5f.firebaseapp.com",
    projectId: "instagram-clone-57f5f",
    storageBucket: "instagram-clone-57f5f.appspot.com",
    messagingSenderId: "348041678986",
    appId: "1:348041678986:web:0347440263996d34569d73",
    measurementId: "G-YBW4RCP81L"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db ,auth , storage};
