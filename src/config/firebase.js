import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getRemoteConfig, fetchAndActivate } from 'firebase/remote-config';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'react-firestore-exercise.firebaseapp.com',
  projectId: 'react-firestore-exercise-4ae95',
  appId: '491623188913',
  //storageBucket: 'YOUR_STORAGE_BUCKET',
  //messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore instance
//const db = getFirestore(app);
//optional remote config per video we did
const remoteConfig = getRemoteConfig(app);
console.log(remoteConfig);

export const db = getFirestore(app);
