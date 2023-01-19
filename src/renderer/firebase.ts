import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// TODO: Put the apiKey to the .env file
const firebaseConfig = {
  apiKey: 'AIzaSyCgSUyao105q12zhL8DRE26JjvSxQEqk0Y',
  authDomain: 'budget-tracker-db-2.firebaseapp.com',
  projectId: 'budget-tracker-db-2',
  storageBucket: 'budget-tracker-db-2.appspot.com',
  messagingSenderId: '989832294908',
  appId: '1:989832294908:web:50151fce01274cc1920279',
  measurementId: 'G-4RFLSLYVTX',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig, 'app');

export const db = getFirestore(app);
export const storage = getStorage(app);

export default { db, storage };
