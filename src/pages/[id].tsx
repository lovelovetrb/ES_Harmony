import StudentDetail from "@/components/molecules/StudentDetail/StudentDetail";

import { motion } from "framer-motion";

import { StudentData } from "@/types/types";
import { getData } from "@/lib/getData";

import { Zen_Kaku_Gothic_New } from "next/font/google";

const zenkaku = Zen_Kaku_Gothic_New({
  weight: ["500"],
  subsets: ["latin"],
});

type Props = {
  data: StudentData;
};

const id = ({ data }: Props) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        className={zenkaku.className}
      >
        <StudentDetail data={data} />
      </motion.div>
    </>
  );
};

export const getStaticPaths = async () => {
  const studentData: any = await getData();
  const paths = studentData.map((data: StudentData) => ({
    params: { id: data.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: { params: { id: string } }) => {
  const studentData: any = await getData(params.id);
  return {
    props: { data: studentData },
    revalidate: 60,
  };
};

export default id;
