import { Zen_Kaku_Gothic_New } from "next/font/google";
import styles from "@/components/Footer/Footer.module.css";

const zenkaku = Zen_Kaku_Gothic_New({
  weight: ["500"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <div className={`${styles.wrapper} ${zenkaku.className}`}>
      <ul className={styles.list}>
        <li>ES Harmonyについて</li>
        <li>AI技術</li>
      </ul>
      <p className={styles.brand_name}>© 2023 ES Harmony</p>
    </div>
  );
};
export default Footer;
