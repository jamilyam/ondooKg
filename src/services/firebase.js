// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
// import  {firebase} from "firebase/app";
import firebase from "firebase/app";

// Add the Firebase services that you want to use
// We only want to use Firebase Auth here
import "firebase/auth";

// Your app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAVxothrduVE1cjpb9ohtICywjRjVjYhFs",
  authDomain: "ondookg.firebaseapp.com",
  databaseURL: "https://ondookg.firebaseio.com",
  projectId: "ondookg",
  storageBucket: "ondookg.appspot.com",
  messagingSenderId: "610142120953",
  appId: "1:610142120953:web:7edb2e1e7e7956f546ab28",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Finally, export it to use it throughout your app
export default firebase;
