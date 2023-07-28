import styles from "@/components/molecules/StudentCard/StudentCard.module.css";

import Image from "next/image";
import Link from "next/link";



import { StudentData } from "@/types/types";

type props = {
    studentData: StudentData;
};

const StudentCard = ({ studentData }: props) => {
    return (
        <Link href={`/${studentData.id}`}>
            <div className={styles.wrapper} key={studentData.id}>
                <div className={styles.icon}>
                    <Image src="/icon.png" height={80} width={80} alt="icon" />
                </div>
                <div className={styles.student_info}>
                    <h3>🧑‍🎓{studentData.name} さん</h3>
                    <h3>🏫{studentData.school}</h3>
                </div>
                <div className={styles.match_info}>
                    {/* 一番外側の中括弧はJSXに式を埋め込むためのもの */}
                    {/* 一番外側の中括弧で囲まれた部分が即時関数 */}
                    {(() => {
                        if (studentData.match_level > 50) {
                            if (studentData.match_level > 75) {
                                return (
                                    <p>
                                        📌マッチ度:<span className={styles.evalSwitch_S}>S</span>
                                    </p>
                                );
                            } else {
                                return (
                                    <p>
                                        📌マッチ度:<span className={styles.evalSwitch_A}>A</span>
                                    </p>
                                );
                            }
                        } else {
                            if (studentData.match_level > 25) {
                                return (
                                    <p>
                                        📌マッチ度:<span className={styles.evalSwitch_B}>B</span>
                                    </p>
                                );
                            } else {
                                return (
                                    <p>
                                        📌マッチ度:<span className={styles.evalSwitch_C}>C</span>
                                    </p>
                                );
                            }
                        }
                    })()}

                    {/* 一番外側の中括弧はJSXに式を埋め込むためのもの */}
                    {/* 一番外側の中括弧で囲まれた部分が即時関数 */}
                    {(() => {
                        if (studentData.originality > 50) {
                            if (studentData.originality > 75) {
                                return (
                                    <p>
                                        📌オリジナリティ:<span className={styles.evalSwitch_S}>S</span>
                                    </p>
                                );
                            } else {
                                return (
                                    <p>
                                        📌オリジナリティ:<span className={styles.evalSwitch_A}>A</span>
                                    </p>
                                );
                            }
                        } else {
                            if (studentData.originality > 25) {
                                return (
                                    <p>
                                        📌オリジナリティ:<span className={styles.evalSwitch_B}>B</span>
                                    </p>
                                );
                            } else {
                                return (
                                    <p>
                                        📌オリジナリティ:<span className={styles.evalSwitch_C}>C</span>
                                    </p>
                                );
                            }
                        }
                    })()}
                </div>
                <div className={styles.judgeArea}>
                    <p>👀詳細を見る→</p>
                </div>
            </div>
        </Link>
    );
};
export default StudentCard;
