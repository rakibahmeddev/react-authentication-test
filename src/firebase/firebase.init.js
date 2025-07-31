// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDy_bcHFJY5upafuY3s0Bm6LeLGThptPN8',
  authDomain: 'react-auth-test-4785f.firebaseapp.com',
  projectId: 'react-auth-test-4785f',
  storageBucket: 'react-auth-test-4785f.firebasestorage.app',
  messagingSenderId: '200121498704',
  appId: '1:200121498704:web:a97e480dad23f6b8d86555',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
