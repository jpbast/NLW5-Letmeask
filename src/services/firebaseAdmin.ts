import * as firebaseAdmin from 'firebase-admin';

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey: process.env.NEXT_PUBLIC_PRIVATE_KEY,
      clientEmail: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    }),
    databaseURL: `https://${process.env.NEXT_PUBLIC_PROJECT_ID}.firebaseio.com`,
  });
}

export { firebaseAdmin };
