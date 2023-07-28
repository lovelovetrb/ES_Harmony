// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import admin from "firebase-admin";
import { cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { collection } from "firebase/firestore";
import { addDoc } from "firebase/firestore";

import { StudentData } from "@/types/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data: StudentData = {
    networkImage: {
      url: "https://firebasestorage.googleapis.com/v0/b/es-harmony.appspot.com/o/es_wordcloud.png?alt=media&token=c46e18c9-2939-41d3-a426-8b42ac5ae411",
    },
    originalNetworkImage: {
      url: "https://firebasestorage.googleapis.com/v0/b/es-harmony.appspot.com/o/es_wordcloud_original.png?alt=media&token=3b5a27f9-21bf-4b65-a0dd-9898a66989c1",
    },
    name: "",
    school: "静岡大学",
    match_level: 90,
    originality: 90,
    questions: [
      {
        genre: "【個人の目指す姿】",
        content:
          "将来、「1人で誰かの課題解決ができるエンジニア」を目指している",
      },
    ],
    wrap_up: [
      {
        question: "サイバーエージェントを志望する動機を教えてください。",
        content: "",
      },
    ],
    ability_to_compose_a_text: {
      __html: "",
    },
  };
  await appendData(data)
    .then(() => {
      res.status(200).json({ status: "ok" });
    })
    .catch((error: any) => {
      res.status(500).json({ status: error });
    });
}

async function appendData(data: StudentData) {
  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        privateKey:
          process.env.FIREBASE_PRIVATE_KEY &&
          process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      }),
    });
  }

  const store = getFirestore();
  const doc = store.collection("student").doc();
  await doc.set(data);
}
