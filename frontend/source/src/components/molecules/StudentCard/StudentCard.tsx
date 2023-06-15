import styles from "@/components/molecules/StudentCard/StudentCard.module.css";
import Image from "next/image";
import Link from "next/link";

import { StudentData } from "@/types/types";

type props = {
  data: StudentData;
}

const StudentCard = ({data}:props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.icon}>
                <Image src="/icon.png" height={40} width={40} alt="icon" />
            </div>
            <div className={styles.student_info}>
                <h3>{data.name} さん</h3>
                <h3>{data.school}</h3>
            </div>
            <div className={styles.match_info}>
                <h3>マッチ度</h3>
                <h3>AI度</h3>
            </div>
            <div className={styles.judgeArea}>
                <p>
                    <Link href="/aaaa">詳細を見る→</Link>
                </p>
            </div>
        </div>
    );
};
export default StudentCard;
