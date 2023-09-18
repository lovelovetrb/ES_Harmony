import styles from "@/components/molecules/Footer/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li>
          <Link href="/about">ES Harmonyについて</Link>
        </li>
        <li>
          <Link href="/about#id">AI技術</Link>
        </li>
      </ul>
      <p className={styles.brand_name}>© 2023 ES Harmony</p>
    </div>
  );
};
export default Footer;
