import Link from "next/link";

import { Question, firebaseData } from "@/types/types";
import styles from "@/components/molecules/StudentDetail/StudentDetail.module.css";
import BoxArea from "../BoxArea/BoxArea";
import ChartRadar from "@/components/molecules/ChartRader/ChartRader";
import Image from "next/image";
import GoodBadButton from "@/components/atoms/GoodBadButton/GoodBadButton";

type props = {
  data: firebaseData;
};

export default function StudentDetail({ data }: props) {
  return (
    <>
      <GoodBadButton id={data.id} initialEval={data.studentEval} />
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.nameArea}>{data.name} さんのES</div>
          <div className={styles.inner}>
            <div className={styles.flex_column}>
              <div className={styles.two_column}>
                <BoxArea heading="📈レーダーチャート">
                  <ChartRadar studentData={data} />
                </BoxArea>
              </div>
              <div className={styles.two_column}>
                <BoxArea heading="📋基本情報">
                  <div className={styles.flex_column}>
                    <div className={styles.two_column}>
                      <div className={styles.icon_area}>
                        <div className={styles.icon_wrapper}>
                          <Image className={styles.icon} src={data.icon} fill alt="icon" />
                        </div>
                      </div>
                    </div>
                    <div className={styles.two_column}>
                      <ol className={styles.basic_info}>
                        <li>名前：{data.name}</li>
                        <li>学校：{data.school}</li>
                        <li>マッチ度：{data.match_level}</li>
                        <li>オリジナリティ：{data.originality}</li>
                      </ol>
                    </div>
                  </div>
                </BoxArea>
              </div>
            </div>
            <BoxArea heading={`📝オリジナリティ分析 / オリジナリティ: ${data.originality}%`}>
              <div className={styles.analyzeArea} dangerouslySetInnerHTML={data.ability_to_compose_a_text} />
              <ol className={styles.usage}>
                <li className="highlight">オリジナリティのある文章</li>
                <li className="ai_highlight">AIによる生成の可能性のある文章</li>
              </ol>
            </BoxArea>
            <div className={styles.flex_column}>
              <div className={styles.two_column}>
                <BoxArea heading="🌍 この人を表す言葉">
                  <div className={styles.imgArea}>
                    <img src={data.networkImage.url} alt="ネットワーク図" />
                  </div>
                </BoxArea>
              </div>
              <div className={styles.two_column}>
                <BoxArea heading={`🔥 マッチする${data.name}さんの特徴`} adjust_height={true}>
                  <div className={styles.match_text}>
                    {data.match_individuality ? <p>{data.match_individuality}</p> : <p>マッチする特徴が見つかりませんでした😢</p>}
                  </div>
                </BoxArea>
              </div>
            </div>
            <BoxArea heading="🧑🏻‍💻質問">
              {data.questions.map((item: Question, index: number) => {
                return (
                  <div key={index}>
                    <h3 className={styles.subheading}>
                      {index + 1}. ジャンル：{item.genre}
                    </h3>
                    <h3 className={styles.question_item}>{item.content}</h3>
                  </div>
                );
              })}
            </BoxArea>
          </div>
          <p className={styles.link}>
            <Link href="/">◀ 学生一覧に戻る</Link>
          </p>
        </main>
      </div>
    </>
  );
}
