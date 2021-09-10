import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDR7v966dustTNfuYr_K3dSIVKhvTaUqp4',
  authDomain: 'react-breakingbad-802af.firebaseapp.com',
  projectId: 'react-breakingbad-802af',
  storageBucket: 'react-breakingbad-802af.appspot.com',
  messagingSenderId: '287266165337',
  appId: '1:287266165337:web:c4ce40049a58837f949748',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
