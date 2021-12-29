import firebase from 'firebase/app'

import 'firebase/ath'
import 'firebase/database'

const firebaseConfig = {
  apiKey: process.env.NEXT_APP_API_KEY,
  authDomain: process.env.NEXT_APP_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_APP_DATABASE_URL,
  projectId: process.env.NEXT_APP_PROJECT_ID,
  storageBucket: process.env.NEXT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_APP_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_APP_APP_ID
}

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
export const database = firebase.database()
