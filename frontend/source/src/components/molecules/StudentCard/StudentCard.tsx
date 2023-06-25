import styles from "@/components/molecules/StudentCard/StudentCard.module.css";

import Image from "next/image";
import Link from "next/link";

import { useEffect, useRef } from "react";
import { useGetElementProperty } from "@/lib/hooks";

import { StudentData } from "@/types/types";


type props = {
    studentData: StudentData;
};

const StudentCard = ({ studentData }: props) => {
    const targetRef = useRef(null);
    const { getElementProperty } = useGetElementProperty<HTMLDivElement>(targetRef);
    useEffect(() => {
        console.log(`${studentData.name}の高さは${getElementProperty("y")}です`);
    },);

    return (
        <Link href={`/${studentData.id}`}>
            <div className={styles.wrapper} key={studentData.id} ref={targetRef}>
                <div className={styles.icon}>
                    <Image src="/icon.png" height={40} width={40} alt="icon" />
                </div>
                <div className={styles.student_info}>
                    <h3>🧑‍🎓{studentData.name} さん</h3>
                    <h3>🏫{studentData.school}</h3>
                </div>
                <div className={styles.match_info}>
                    <h3>📌マッチ度:{studentData.match_level}</h3>
                    {/* 一番外側の中括弧はJSXに式を埋め込むためのもの */}
                    {/* 一番外側の中括弧で囲まれた部分が即時関数 */}
                    {(() => {
                        if (studentData.match_level > 50) {
                            if (studentData.match_level > 75) {
                                return <p className={styles.evalSwitch_S}>S{studentData.match_level}</p>;
                            } else {
                                return <p className={styles.evalSwitch_A}>A{studentData.match_level}</p>;
                            }
                        } else {
                            if (studentData.match_level > 25) {
                                return <p className={styles.evalSwitch_B}>B{studentData.match_level}</p>;
                            } else {
                                return <p className={styles.evalSwitch_C}>C{studentData.match_level}</p>;
                            }
                        }
                    })()}
                    <h3>📌AI度:{studentData.AI_degree}</h3>
                    {/* 一番外側の中括弧はJSXに式を埋め込むためのもの */}
                    {/* 一番外側の中括弧で囲まれた部分が即時関数 */}
                    {(() => {
                        if (studentData.AI_degree > 50) {
                            if (studentData.AI_degree > 75) {
                                return <p className={styles.evalSwitch_S}>S{studentData.AI_degree}</p>;
                            } else {
                                return <p className={styles.evalSwitch_A}>A{studentData.AI_degree}</p>;
                            }
                        } else {
                            if (studentData.AI_degree > 25) {
                                return <p className={styles.evalSwitch_B}>B{studentData.AI_degree}</p>;
                            } else {
                                return <p className={styles.evalSwitch_C}>C{studentData.AI_degree}</p>;
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
