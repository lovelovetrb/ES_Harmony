import styles from "@/components/Footer/Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.wrapper}>
            {/* TODO: 各ページ用意？？？ */}
            <ul className={styles.list}>
                <li>ES Harmonyについて</li>
                <li>AI技術</li>
            </ul>
            <p className={styles.brand_name}>© 2023 ES Harmony</p>
        </div>
    );
};
export default Footer;
