import Header from "@/components/Header/Header";
import StudentDetail from "@/components/molecules/StudentDetail/StudentDetail";

import { GetStaticProps } from "next";

import { StudentData } from "@/types/types";
import { getData } from "@/lib/getData";


type Props = {
    data: StudentData;
};

const id = ({ data }: Props) => {
    {
        /* TDOO: dataの差し替え */
    }
    return (
        <>
            <Header />
            <StudentDetail data={data} />
        </>
    );
};

export const getStaticPaths = async () => {
    const studentData: StudentData[] = await getData();
    const paths = studentData.map((data) => ({
        params: { id: data.id },
    }));
    return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<{
    data: StudentData;
}> = async () => {
    const data: StudentData[] = await getData();
    return {
        props: { data: data[0] },
        revalidate: 60,
    };
};

export default id;
