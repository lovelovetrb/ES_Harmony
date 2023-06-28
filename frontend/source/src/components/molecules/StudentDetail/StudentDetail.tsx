import Link from "next/link";

import { Question, StudentData } from "@/types/types";
import styles from "@/components/molecules/StudentDetail/StudentDetail.module.css";
import { WrapUp } from "@/types/types";

type props = {
    data: StudentData;
};
export default function StudentDetail({ data }: props) {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.nameArea}>{data.name} さんのES</div>
                <div className={styles.inner}>
                    <div className={styles.box}>
                        <p>{data.match_level}%マッチ</p>
                    </div>
                    <div className={styles.wrap_up}>
                        <h2 className={styles.heading}>要約</h2>
                        <div className={styles.textArea}>
                            {data.wrap_up.map((item: WrapUp, index: number) => {
                                return (
                                    <div key={index}>
                                        <li className={styles.subheading}>{`${item.question}`}</li> <p>・内容：{item.content}</p>{" "}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className={styles.flex_column}>
                        <div className={styles.imageArea}>
                            <h2 className={styles.heading}>ネットワーク図</h2>
                            <div className={styles.textArea}>
                                <img src={data.NetworkImage.url} alt="ネットワーク図" />
                            </div>
                        </div>
                        <div className={styles.question}>
                            <h2 className={styles.heading}>質問</h2>
                            <div className={styles.textArea}>
                                {data.questions.map((item: Question, index: number) => {
                                    return (
                                        <div key={index}>
                                            <h3 className={styles.subheading}>
                                                {index + 1}. ジャンル：{item.genre}
                                            </h3>
                                            <h3>・内容：{item.content}</h3>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className={styles.ablityComposeText}>
                        <h2 className={styles.heading}>オリジナリティ分析 オリジナリティ:{data.AI_degree}%</h2>
                        <div className={styles.textArea}>
                            <div className={styles.analyzeArea} dangerouslySetInnerHTML={data.ability_to_compose_a_text} />
                            <ol className={styles.usage}>
                                <li className="highlight">オリジナリティのある文章</li>
                                <li className="ai_highlight">AIによる生成の可能性のある文章</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <p className={styles.link}>
                    <Link href="/">◀ 学生一覧に戻る</Link>
                </p>
            </main>
            <aside></aside>
        </div>
    );
}
