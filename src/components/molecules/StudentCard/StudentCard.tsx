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
        <Image className={styles.icon} src={studentData.icon} fill alt="icon" />
        <div className={styles.student_info}>
          <h3>🧑‍🎓{studentData.name} さん</h3>
          <h3>🏫{studentData.school}</h3>
        </div>
        <div className={styles.match_info}>
          <p>📌マッチ度:{toEvalLank(studentData.match_level)}</p>
          <p>📌オリジナリティ:{toEvalLank(studentData.originality)}</p>
        </div>
        <div className={styles.linkArea}>
          <p>👀詳細を見る→</p>
        </div>
      </div>
    </Link>
  );
};

function toEvalLank(evalNum: number) {
  if (evalNum < 25) {
    return <span className={`${styles.evalSwitch_C} ${styles.eval}`}>C</span>;
  } else if (evalNum < 50) {
    return <span className={`${styles.evalSwitch_B} ${styles.eval}`}>B</span>;
  } else if (evalNum < 75) {
    return <span className={`${styles.evalSwitch_A} ${styles.eval}`}>A</span>;
  } else if (evalNum < 100) {
    return <span className={`${styles.evalSwitch_S} ${styles.eval}`}>S</span>;
  } else {
    return <span />;
  }
}

export default StudentCard;
