import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// TODO: Put the apiKey to the .env file
const firebaseConfig = {
  apiKey: 'AIzaSyBfv9V2G_ExTW1P4mt_I5RhSUEg0rlAHIc',
  authDomain: 'budget-tracker-db-1-6e291.firebaseapp.com',
  projectId: 'budget-tracker-db-1-6e291',
  storageBucket: 'budget-tracker-db-1-6e291.appspot.com',
  messagingSenderId: '677681489849',
  appId: '1:677681489849:web:869812d5be1fc2aad37868',
  measurementId: 'G-2NJM34DBF6',
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);



// Second database
const firebaseConfig2 = {
  apiKey: "AIzaSyCgSUyao105q12zhL8DRE26JjvSxQEqk0Y",
  authDomain: "budget-tracker-db-2.firebaseapp.com",
  projectId: "budget-tracker-db-2",
  storageBucket: "budget-tracker-db-2.appspot.com",
  messagingSenderId: "989832294908",
  appId: "1:989832294908:web:50151fce01274cc1920279",
  measurementId: "G-4RFLSLYVTX"
};

// Initialize Firebase 2 - Storage function
const app = initializeApp(firebaseConfig2);
const storage = getStorage(app);


export default db;
export default storage;

