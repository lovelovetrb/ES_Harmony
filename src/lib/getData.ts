import { firebaseData } from "@/types/types";

import admin from "firebase-admin";
import { cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

export async function getData(id?: string) {
  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        privateKey: process.env.FIREBASE_PRIVATE_KEY && process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      }),
    });
  }

  const store = getFirestore();
  if (!id) {
    const data = await store.collection("student").get();
    const result: firebaseData[] = [];
    data.docs.map((doc: any, index) => {
      result.push(doc.data());
      result[index].id = doc.id;
    });
    return result;
  } else {
    const data = await store.collection("student").doc(id).get();
    return data.data();
  }
}
