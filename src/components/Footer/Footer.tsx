import styles from "@/components/Footer/Footer.module.css";
import { Noto_Sans_JP } from "next/font/google";

const notojp = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-notojp",
  display: "swap",
});

const Footer = () => {
    return (
        <div className={`${styles.wrapper} ${notojp.variable}`}>
            <ul className={styles.list}>
                <li>ES Harmonyについて</li>
                <li>AI技術</li>
            </ul>
            <p className={styles.brand_name}>© 2023 ES Harmony</p>
        </div>
    );
};
export default Footer;
