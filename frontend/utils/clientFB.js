import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APP_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_APP_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_APP_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_APP_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_APP_STORAGE_BUCKET,
  appId: process.env.NEXT_PUBLIC_APP_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_APP_MEASUREMENT_ID,
};

export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}