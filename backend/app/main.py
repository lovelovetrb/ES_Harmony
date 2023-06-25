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
    doc_ref.set({"NetworkImage":{"url":"https://www.notion.so/6-16-698927660ec446c5af6b7dc62a9f8d3c"},
            "name":"田中太郎",
            "school":"京都大学",
            "match_level":50,
            "AI_degree":50,
            "wrap_up":[{"genre":"志望動機",
                        "content":"金が欲しいから"},
                        {"genre":"技術スタック",
                        "content":"もろもろ"}],
            "questions":[{"genre":"志望動機",
                        "content":"就活なめてんのか"},
                        {"genre":"技術スタック",
                        "content":"なめとんのかわれ"}],
                "ability_to_compose_a_text":{
        "__html": "文章構成能力の分析を行います。<mark class=highlight>文章構成能力の分析を行います。文章構成能力</mark>の分析を行います。文章構成能力の分析を行います。文章構成能力の分析を行います。文章構成能力の分析を行います。文章構成能力の分析を行います。文章構成能力の分析を行います。文章構成能力<mark class=ai_highlight>文章構成能力の分析を行います。文章構成能力</mark>の分析を行います。文章構成能力の分析を行います。文章構成能力の分析を行います。文章構成能力の分析を行います。文章構成能力の分析を行います。文章構成能力の分析を行います。文章構成能力の分析を行います。文章構成能力の分析を行います。文章構成能力の分析を行います。文章構成能力の分析を行います。文章構成能力の分析を行います。文章構成能力の分析を行います。文章構成能力の分析を行います。"
    }
            }
)

