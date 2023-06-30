from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://frontend:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Firebase Admin SDKの初期化
cred = credentials.Certificate("admin_info.json")
firebase_admin.initialize_app(cred)

# Firestoreクライアントの作成
db = firestore.client()

@app.get("/data")
async def get_data():
    data = []
    # Firestoreからデータを取得する処理
    collection_ref = db.collection("student")
    docs = collection_ref.get()
    if len(docs) == 0:
        raise HTTPException(status_code=404, detail="Item not found")
    for doc in docs:
        tempData = doc.to_dict()
        tempData['id'] = doc.id
        data.append(tempData)
    return data

@app.get("/data/{id}")
async def get_one_data(id: str):
    # Firestoreからデータを取得する処理
    collection_ref = db.collection("student").document(id)
    doc = collection_ref.get()
    if doc.exists:
        tempData = doc.to_dict()
        tempData['id'] = doc.id
        return tempData
    else:
        raise HTTPException(status_code=404, detail="Item not found")

@app.get("/append")
async def append_data():
    # データベースに追加
    doc_ref = db.collection('student').document()
    doc_ref.set({"NetworkImage":{"url":"https://firebasestorage.googleapis.com/v0/b/es-harmony.appspot.com/o/es_wordcloud.png?alt=media&token=9aeec591-c87b-46e5-b6c0-24853387ca5c"},
            "name":"荒沢康平",
            "school":"静岡大学",
            "match_level":90,
            "originality":90,
            "wrap_up":[{"question":"サイバーエージェントを志望する動機を教えてください。",
                        "content":"就活生がサイバーエージェントを志望する理由は、一つ目には同社の幅広い事業領域と新規事業への積極性が引き寄せていることで、これは彼の目指す「多角的な視点を持つ問題解決能力」の成長に寄与すると感じているからです。二つ目の理由は、同社が様々な技術領域（バックエンド、フロントエンド、インフラ）で経験を積む機会を提供し、彼が目指す全面的なエンジニアになるためのスキルを磨ける環境を提供しているからです。これらの理由から、彼は自身の将来の成長とキャリアパスにおいてサイバーエージェントが最適な場所であると考えています。"},
                        {"question":"長期間（目安としては1ヶ月以上）にわたってグループで協調しながら何かに取り組んだエピソードを200文字程度で教えてください。他の回答と重複していても構いません。（技術的なエピソード以外でも可）",
                        "content":"ベンチャー企業で医療用診断ソフトウェアの認証申請リーダーを務め、行政書士や社員と協働した。初めは認証申請や商品リスク分析について知識がなく苦労したが、自己学習や現地調査を通じて解決策を見つけた。この経験が課題解決能力とスピード感を向上させ、現在活動を進めるための基盤を築いた。"}],
            "questions":[{"genre":"【個人の目指す姿】",
                        "content":"将来、「1人で誰かの課題解決ができるエンジニア」を目指している"},
                        {"genre":"【社会の課題視野】",
                        "content":"現代社会の課題は多くの業界の課題が複雑に絡み合っているという印象を持っている"},
                        {"genre":"【弊社の事業領域に対する評価】",
                        "content":"弊社はエンタメ事業から課題解決事業まで幅広い事業を展開していることからとても魅力的に感じた"},
                        {"genre":"【技術領域の理解】",
                        "content":"システムの機能を作るバックエンドの技術、ユーザーに使ってもらうためのフロントエンドの技術、ユーザーにシステムを届けるためのインフラ技術、これら全てがないと上で挙げた将来像はなれないと考えている"},
                        {"genre":"【弊社の技術領域と制度に対する評価】",
                        "content":"弊社は部署異動などを積極的に行える制度が整っていることから、基礎となる技術を自分で身につけた上で、業務で磨きをかけていきたいと考えた"},
                        {"genre":"【チームワーク】",
                        "content":"具体的にどのように行政書士の先生や会社職員と協力しながら認証申請を行ったのか詳しく教えてください。また、その中でのあなたの役割は何でしたか？"},
                        {"genre":"【知識・学習能力】",
                        "content":"認証申請に関する知識がなかった時、どのようにして情報収集や学習を行いましたか？また、その結果どの程度理解することができましたか？"},
                        {"genre":"【問題解決能力】",
                        "content":"リスク分析の理解について苦労したとのことですが、具体的にどのような問題があり、それをどのように解決しましたか？"},
                        {"genre":"【製品理解】",
                        "content":"製品を自分で使ってリスクを列挙したとのことですが、それによって何を学びましたか？また、それが認証申請にどのように反映されましたか？"},
                        {"genre":"【フィードバック収集】",
                        "content":"使っている病院の職員に話を聞いたとのことですが、具体的にどのようなフィードバックを得ましたか？それはどのように認証申請に影響しましたか？"},
                        {"genre":"【自己学習】",
                        "content":"サーバーセキュリティについて独学で調べたとのことですが、その結果どのような知識を得て、認証申請にどのように活かしましたか？"},
                        {"genre":"【リーダーシップ】",
                        "content":"認証申請をリーダーとして行った経験から、リーダーシップについて何を学びましたか？また、その経験が弊社での仕事にどのように役立つと思いますか？"},],
                "ability_to_compose_a_text":{
        "__html": "<h2>◯◯を志望する動機を教えてください。</h2><p>私が貴社を志望する理由は以下の2つだ。①事業領域が広く、新規事業にも積極的②幅広い技術領域に携われるまず①について、私は将来、「1人で誰かの課題解決ができるエンジニア」を目指している。<mark class=ai_highlight>私は、現代社会の課題は多くの業界の課題が複雑に絡み合っているという印象を持っており、これを解決するには幅広い業界での業務に携わり、多角的な物事の見方をできる必要があると考えた。</mark>貴社はエンタメ事業から課題解決事業まで幅広い事業を展開していることからとても魅力的に感じた。続いて②について、システムの機能を作るバックエンドの技術、ユーザーに使ってもらうためのフロントエンドの技術、ユーザーにシステムを届けるためのインフラ技術、これら全てがないと上で挙げた将来像はなれないと考えている。<mark class=highlight>そんな中で、貴社は部署異動などを積極的に行える制度が整っていることから、基礎となる技術を自分で身につけた上で、業務で磨きをかけていきたいと考えた。</mark></p><h2>長期間にわたってグループで協力しながら何かに取り組んだエピソードを200文字程度で教えてください。</h2><p>私は、<mark class=highlight>ベンチャー企業でのアルバイトで医療用診断ソフトウェアを販売するための認証申請を行っています。</mark>製品を販売するためには企業・自治体から認証申請を行う必要があります。私はその認証申請をリーダーを任され、<mark class=highlight>行政書士の先生や会社職員とともに協力しながら活動しております。</mark>苦労したことは、従業員の中で認証申請に関する知識を持つものがいなかったことです。さらに、私は商品の開発には携わっていなかったため、商品のリスク分析の工程の理解についても苦労しました。工夫した点は、1）リスク分析の際にはリスクを列挙するために自分で商品を使った、2）使っている病院の職員に話を聞いた、3）<mark class=ai_highlight>サーバーセキュリティについて独学調べて勉強したこと</mark>、の3点です。そういった経験から、課題解決能力が向上し現在ではスピード感を持って活動を進められております。</p>"
    }
            }
)

