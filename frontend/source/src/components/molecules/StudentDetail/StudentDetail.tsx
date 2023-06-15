import { StudentData } from "@/types/types";
import styles from "@/components/molecules/StudentDetail/StudentDetail.module.css";
import { WrapUp } from "@/types/types";

type props = {
    data: StudentData;
};
export default function StudentDetail({ data }: props) {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.heading}>{data.name} さんのES</div>
                <div className={styles.inner}>
                    <div className={styles.box}>
                        <p>{data.match_level}%マッチ</p>
                        <p>Ai度：{data.AI_degree}%</p>
                    </div>
                    <div className={styles.wrap_up}>
                        <h2>要約</h2>
                        {data.wrap_up.map((item: WrapUp, index: number) => {
                            return (
                                <div key={index}>
                                    <h3>
                                        {index + 1}. ジャンル：{item.genre}
                                    </h3>
                                    <h3>・内容：{item.content}</h3>
                                </div>
                            );
                        })}
                    </div>
                    <div className={(styles.flex_column)}>
                        <div className={styles.wrap_up}>
                            <h2>要約</h2>
                            {data.wrap_up.map((item: WrapUp, index: number) => {
                                return (
                                    <div key={index}>
                                        <h3>
                                            {index + 1}. ジャンル：{item.genre}
                                        </h3>
                                        <h3>・内容：{item.content}</h3>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={styles.wrap_up}>
                            <h2>要約</h2>
                            {data.wrap_up.map((item: WrapUp, index: number) => {
                                return (
                                    <div key={index}>
                                        <h3>
                                            {index + 1}. ジャンル：{item.genre}
                                        </h3>
                                        <h3>・内容：{item.content}</h3>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </main>
            <aside></aside>
        </div>
    );
}
