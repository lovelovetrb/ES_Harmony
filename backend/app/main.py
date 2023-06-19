from fastapi import FastAPI
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

@app.get("/")
def root():
    return [{"NetworkImage":{"url":"https://www.notion.so/6-16-698927660ec446c5af6b7dc62a9f8d3c"},
            "name":"荒沢康平",
            "school":"静岡大学",
            "match_level":80,
            "AI_degree":20,
            "wrap-up":[{"genre":"志望動機",
                        "content":"金が欲しいから"},
                        {"genre":"技術スタック",
                        "content":"なし"}],
            "questions":[{"genre":"志望動機",
                        "content":"就活なめてんのか"},
                        {"genre":"技術スタック",
                        "content":"なめとんのかわれ"}]
            }]

@app.get("/items/{item_id}")
def read_item(item_id: int, q: str):
    return {"item_id": item_id, "q": q}

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
    for doc in docs:
        data.append(doc.to_dict())

    return {"data": data}
