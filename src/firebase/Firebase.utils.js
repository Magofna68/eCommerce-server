import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyBhnVx1XWwHwiosiNmpjDDGwZw8QyKIJUY",
  authDomain: "m68-e-commerce.firebaseapp.com",
  projectId: "m68-e-commerce",
  storageBucket: "m68-e-commerce.appspot.com",
  messagingSenderId: "756447485486",
  appId: "1:756447485486:web:6f633390210d031e0409bf"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;