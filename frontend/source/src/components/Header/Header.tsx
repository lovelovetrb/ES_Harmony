import styles from "@/components/Header/Header.module.css";

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>ES Harmony</h1>
            <p className={styles.description}>あなたの企業とマッチする就活生をAIと一緒に見つけましょう</p>
        </div>
    );
};

export default Header;
