import Header from "@/components/Header/Header";
import StudentDetail from "@/components/molecules/StudentDetail/StudentDetail";

import Link from "next/link";

import { motion } from "framer-motion";

import { StudentData } from "@/types/types";
import { getData } from "@/lib/getData";

type Props = {
    data: StudentData;
};

const id = ({ data }: Props) => {
    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
                <Header />
                <StudentDetail data={data} />
            </motion.div>
        </>
    );
};

export const getStaticPaths = async () => {
    const studentData: StudentData[] = await getData();
    const paths = studentData.map((data: StudentData) => ({
        params: { id: data.id },
    }));
    return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: string) => {
    const data: StudentData = await getData(params.id);
    return {
        props: { data: data },
        revalidate: 60,
    };
};

export default id;
