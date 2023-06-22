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
