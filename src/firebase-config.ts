import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE,
  authDomain: import.meta.env.VITE_DOMAIN_FIREBASE,
  databaseURL: import.meta.env.VITE_URL_FIREBASE,
  projectId: import.meta.env.VITE_PROYECT_ID_FIREBASE,
  storageBucket: import.meta.env.VITE_STORAGE_FIREBASE,
  messagingSenderId: import.meta.env.VITE_MESSAGING_FIREBASE,
  appId: import.meta.env.VITE_APP_ID_FIREBASE,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID_FIREBASE
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const google = new GoogleAuthProvider();

export { auth, google }