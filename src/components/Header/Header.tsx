import styles from "@/components/Header/Header.module.css";
import Link from "next/link";

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <Link href="/">
                <h1 className={styles.title}>ES Harmony</h1>
                <p className={styles.description}>あなたの企業とマッチする就活生をAIと一緒に見つけましょう</p>
            </Link>
        </div>
    );
};

export default Header;
