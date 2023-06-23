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
                    <h3>{studentData.name} さん</h3>
                    <h3>{studentData.school}</h3>
                </div>
                <div className={styles.match_info}>
                    <h3>マッチ度:{studentData.match_level}</h3>
                    <h3>AI度:{studentData.AI_degree}</h3>
                </div>
                <div className={styles.judgeArea}>
                    <p>詳細を見る→</p>
                </div>
            </div>
        </Link>
    );
};
export default StudentCard;
