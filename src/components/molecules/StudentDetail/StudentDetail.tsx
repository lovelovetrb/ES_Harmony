import Link from "next/link";

import { Question, StudentData } from "@/types/types";
import styles from "@/components/molecules/StudentDetail/StudentDetail.module.css";
import BoxArea from "../BoxArea/BoxArea";
import ChartRadar from "@/components/molecules/Chart/ChartRader";
import Image from "next/image";

type props = {
    data: StudentData;
};
export default function StudentDetail({ data }: props) {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.nameArea}>{data.name} さんのES</div>
                <div className={styles.inner}>
                    <div className={styles.flex_column}>
                        <div className={styles.two_column}>
              {/* TODO: 絵文字挿入*/}
                            <BoxArea heading="">
                                <ChartRadar />
                            </BoxArea>
                        </div>
                        <div className={styles.two_column}>
                            <BoxArea heading="基本情報">
                                <div className={styles.flex_column}>
                                    <div className={styles.two_column}>
                                        <div className={styles.iconArea}>
                                            <Image src={data.icon} height={350} width={350} alt="icon" />
                                        </div>
                                    </div>
                                    <div className={styles.two_column}>
                                        <ol className={styles}>
                                            <li>名前：{data.name}</li>
                                            <li>学校：{data.school}</li>
                                            <li>学校：{data.school}</li>
                                            <li>学校：{data.school}</li>
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
                            <BoxArea heading="🔥 チャート">
                                <p>マッチの根拠になった文章が入ります</p>
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
            <aside></aside>
        </div>
    );
}
