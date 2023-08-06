// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import admin from "firebase-admin";
import { cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

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
    name: "五十嵐壮亮",
    school: "山梨大学",
    match_level: 30,
    originality: 30,
    questions: [
      {
        genre: "【テクノロジーと社会革新】",
        content:
          "あなたが感じるテクノロジーの力で社会革新をもたらす具体的な例を教えていただけますか？また、それに対して自分自身がどのように貢献できると考えていますか？",
      },
      {
        genre: "【ITの進化と人々の生活】",
        content:
          "ITの進化によって人々の生活やビジネスプロセスがどのように改善されたと思いますか？また、それらの改善をより進めるためには何が必要だと考えていますか？",
      },
      {
        genre: "【自己成長と学習】",
        content:
          "IT業界で学び続けることの重要性について触れていますが、具体的にはどのようなスキルや知識を身につけたいと考えていますか？また、自己成長のための計画はありますか？",
      },
      {
        genre: "【クリエイティブな解決策と社会貢献】",
        content:
          "具体的にどのような問題を解決したいと考えていますか？また、そのためのクリエイティブな解決策とは何だと思いますか？",
      },
      {
        genre: "【チームワーク】",
        content:
          "チームで協力し合うことの重要性について述べていますが、具体的にはどのような役割を担いたいと考えていますか？また、過去のチームでの経験から学んだことは何ですか？",
      },
      {
        genre: "【キャリアビジョン】",
        content:
          "弊社でどのようなキャリアを築きたいと考えていますか？また、それを実現するためには何が必要だと思いますか？",
      },
      {
        genre: "【プロジェクトの詳細】",
        content:
          "大学で取り組んだアプリケーションの開発プロジェクトの詳細を教えてください。開発したアプリケーションの概要、その目的、どのような役割を果たしたのか、どのような技術を用いたのか等について説明していただけますか？",
      },
      {
        genre: "【チームでの役割とコミュニケーション】",
        content:
          "プロジェクトチームでのあなたの役割についてもっと詳しく教えてください。また、意見の食い違いがあった際にどのようにそれを解決し、チーム全体で円滑なコミュニケーションを実現したのかについて具体的なエピソードをお聞かせください。",
      },
      {
        genre: "【学習と成長】",
        content:
          "デザインの役割を担当しつつ、プログラムの知識を学んだとのことですが、具体的に何を学び、どのようにして学んだのか、その経験が自身の成長にどのように寄与したのかについて教えてください。",
      },
      {
        genre: "【困難な局面の克服】",
        content:
          "プロジェクト中に直面した困難な局面について具体的に教えてください。また、その際にどのようにしてチームとしてその困難を克服したのか、具体的な例を挙げていただけますか？",
      },
      {
        genre: "【弊社への適用】",
        content:
          "ご自身が学んだ経験やスキルを弊社のどの部分に活かしていきたいと考えていますか？ 弊社で達成したい具体的な目標やビジョンがあればお聞かせください。",
      },
    ],
    wrap_up: [
      {
        question: "◯◯を志望する動機を教えてください。",
        content:
          "私の○○志望の理由は、テクノロジーを活用して社会に革新をもたらし、ビジネスや生活の便利性を向上させることに魅力を感じるからです。また、常に変化し続けるIT業界で学びながら自己成長し、チームと協力してクリエイティブな問題解決に取り組むことにより、社会に貢献するキャリアを築きたいと考えています。",
      },
      {
        question:
          "長期間（目安としては1ヶ月以上）にわたってグループで協調しながら何かに取り組んだエピソードを200文字程度で教えてください。他の回答と重複していても構いません。（技術的なエピソード以外でも可）",
        content:
          "大学のプロジェクトでグループでアプリケーションを開発した経験から、メンバー間の異なる意見を通じた協力と学びの価値を理解しました。困難な状況でも互いに信頼とサポートの姿勢を保つことで問題を乗り越え、成功を収めたこの経験は、今後のチームでの取り組みに役立てる重要な学びとなりました。",
      },
    ],
    ability_to_compose_a_text: {
      __html:
        "<h2>◯◯を志望する動機を教えてください。</h2><p><mark class=ai_highlight>私は○○を志望する理由は、テクノロジーの力で社会に革新をもたらすことに魅力を感じるからです。</mark><mark class=ai_highlight>ITの進化により、人々の生活が便利になったり、ビジネスプロセスが効率化されたりすることを目の当たりにしてきました。</mark><mark class=ai_highlight></mark>私自身も、新しい技術やアプリケーションの開発に携わることで、よりよい未来を創造したいと考えています。<mark class=ai_highlight>また、IT業界は常に変化しており、学び続ける姿勢が求められるため、自己成長の機会が豊富だと感じています。さまざまなチャレンジに立ち向かいながら、クリエイティブな解決策を提供することで、社会に貢献したいと強く思っています。そして、チームで協力し合いながら夢を実現できるIT企業でのキャリアを築きたいと考えています。</mark></p><h2>長期間にわたってグループで協力しながら何かに取り組んだエピソードを200文字程度で教えてください。</h2><p>大学のプロジェクトで、私たちはグループでアプリケーションの開発に取り組みました。メンバーは個性豊かでしたが、目標に向かって協力し合うことで強力なチームとなりました。<mark class=ai_highlight>最初は意見の食い違いもありましたが、定期的なミーティングやタスクの分担を通じて円滑なコミュニケーションを築き上げました。</mark>私はデザインを担当しましたが、プログラムの知識が限られていたため、メンバーに助けてもらいながら学びました。<mark class=ai_highlight>困難な局面もありましたが、互いを信頼し合い、サポートし合う姿勢で乗り越えました。結果として、素晴らしいアプリケーションを完成させ、発表会では好評を得ることができました。この経験は、グループワークの大切さと協力の力を学び、今後のチームでの取り組みに活かしていきたいと感じました。</mark></p>",
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
