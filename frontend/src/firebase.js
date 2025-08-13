

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOcYI88bz4Eqd9Kt0f1KPNC3bCxOigpSM",
  authDomain: "entrypoint-dc5a6.firebaseapp.com",
  projectId: "entrypoint-dc5a6",
  storageBucket: "entrypoint-dc5a6.firebasestorage.app",
  messagingSenderId: "449193825556",
  appId: "1:449193825556:web:f3e613bbb5feae8cdcde01",
  measurementId: "G-W4TX8CF3LP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);