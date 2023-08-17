import StudentDetail from "@/components/molecules/StudentDetail/StudentDetail";
import styles from "@/styles/id.module.css";

import { motion } from "framer-motion";

import { StudentData, firebaseData } from "@/types/types";
import { getData } from "@/lib/getData";

import { Zen_Kaku_Gothic_New } from "next/font/google";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const zenkaku = Zen_Kaku_Gothic_New({
  weight: ["500"],
  subsets: ["latin"],
});

type Props = {
  beforeStudentID: string;
  data: StudentData;
  afterStudentID: string;
};

const id = ({ beforeStudentID, data, afterStudentID }: Props) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        className={zenkaku.className}
      >
        <div className={styles.flex}>
          <div className={styles.button_area}>
            {beforeStudentID.length !== 0 && (
              <Link href={`${beforeStudentID}`}>
                <p className={styles.link_button}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </p>
              </Link>
            )}
          </div>
          <StudentDetail data={data} />
          <div className={styles.button_area}>
            {afterStudentID.length !== 0 && (
              <Link href={`${afterStudentID}`}>
                <p className={styles.link_button}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </p>
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export const getStaticPaths = async () => {
  const studentData: firebaseData[] = await getData();
  const paths = studentData.map((data: firebaseData) => ({
    params: { id: data.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: { params: { id: string } }) => {
  const allStudentData: firebaseData[] = await getData();
  let beforeStudentID = "";
  let afterStudentID = "";
  const studentData: firebaseData[] = [];
  if (allStudentData != undefined) {
    allStudentData.map((student: firebaseData, index: number) => {
      if (student.id === params.id) {
        studentData.push(student);
        if (index !== 0) {
          beforeStudentID = allStudentData[index - 1].id;
        }
        if (index !== allStudentData.length - 1) {
          afterStudentID = allStudentData[index + 1].id;
        }
      }
    });
  }
  return {
    props: { afterStudentID, data: studentData[0], beforeStudentID },
    revalidate: 60,
  };
};

export default id;
