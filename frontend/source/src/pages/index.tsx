import Head from "next/head";
import { useState, useEffect, useCallback } from "react";
import { GetStaticProps } from "next";

import styles from "@/styles/Home.module.css";

import Header from "@/components/Header/Header";
import ButtonArea from "@/components/molecules/ButtonArea/ButtonArea";
import Button from "@/components/atoms/Button/Button";
import StudentCard from "@/components/molecules/StudentCard/StudentCard";

import { StudentData } from "@/types/types";
import { getData } from "@/lib/getData";

import { Noto_Sans_JP } from "next/font/google";

import { motion } from "framer-motion";

const notojp = Noto_Sans_JP({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
    variable: "--font-notojp",
    display: "swap",
});

type Props = {
    studentData: StudentData[];
};

export default function Home({ studentData }: Props) {
    const [sort, setSort] = useState<string>("match_level");
    const [order, setOrder] = useState<string>("asc");

    const handleSort = (field: keyof StudentData) => {
        console.log(field);
        if (field === sort) {
            setOrder(order === "asc" ? "desc" : "asc");
        } else {
            setSort(field);
            setOrder("asc");
        }
    };

    studentData.sort((a, b) => {
        if (order === "desc") {
            return a[sort as keyof StudentData] < b[sort as keyof StudentData] ? -1 : 1;
        } else {
            return b[sort as keyof StudentData] > a[sort as keyof StudentData] ? 1 : -1;
        }
    });

    const list = {
        visible: {
            opacity: 1, // 不透明度1
            transition: {
                staggerChildren: 0.1, // 子要素に1秒間隔でアニメーションを行う
            },
        },
        hidden: {
            opacity: 0, // 不透明度0
        },
    };

    const item = {
        visible: { x: 0 },
        hidden: { x: -300 },
    };

    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
                <Head>
                    <title>ES Harmony</title>
                    <meta name="description" content="Generated by create next app" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main className={`${styles.main} ${notojp.variable}`}>
                    <Header />
                    <div className={styles.container}>
                        <ButtonArea>
                            <Button
                                text={`マッチ度 ${sort == "match_level" && order == "asc" ? "↑" : "↓"}`}
                                onClickFunc={handleSort}
                                field={"match_level"}
                            />
                            <Button text={`AI度 ${sort == "AI_degree" && order == "asc" ? "↑" : "↓"}`} onClickFunc={handleSort} field={"AI_degree"} />
                        </ButtonArea>
                        <div className={styles.cardArea}>
                            <motion.ol variants={list} initial="hidden" animate="visible">
                                {studentData.map((one_studentData: StudentData, index: number) => (
                                    <motion.li variants={item} key={index}>
                                        <motion.div transition={{ duration: 0.25 }} whileHover={{ scale: 1.05 }} key={index}>
                                            <StudentCard studentData={one_studentData} />
                                        </motion.div>
                                    </motion.li>
                                ))}
                            </motion.ol>
                        </div>
                    </div>
                </main>
            </motion.div>
        </>
    );
}

type returnData = {
    studentData: StudentData[];
};

export const getStaticProps: GetStaticProps<returnData> = async () => {
    const studentData = await getData();
    return {
        props: { studentData: Array.isArray(studentData) ? studentData : [studentData] },
    };
};
