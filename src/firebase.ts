import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import aiStudioConfig from '../firebase-applet-config.json';

// Cek apakah ada konfigurasi dari environment variables (misal saat di-deploy ke Vercel)
const isCustomConfig = !!import.meta.env.VITE_FIREBASE_API_KEY;

const firebaseConfig = isCustomConfig ? {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
} : aiStudioConfig;

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, isCustomConfig ? undefined : aiStudioConfig.firestoreDatabaseId);
export const auth = getAuth(app);
export { firebaseConfig };
export default app;
