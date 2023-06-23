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
    const studentData: StudentData | StudentData[] = await getData();
    const studentDataArray = Array.isArray(studentData) ? studentData : [studentData];
    const paths = studentDataArray.map((data: StudentData) => ({
        params: { id: data.id },
    }));
    return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: { params: { id: string } }) => {
    const data: StudentData | StudentData[] = await getData(params.id);
    const studentData = Array.isArray(data) ? data[0] : data;
    return {
        props: { data: studentData },
        revalidate: 60,
    };
};

export default id;
