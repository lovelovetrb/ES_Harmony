import styles from "@/components/molecules/BoxArea/BoxArea.module.css";

type Props = {
  heading: string;
  children: React.ReactNode;
};

const BoxArea = ({ heading, children }: Props) => {
  return (
    <>
      <h2 className={styles.heading}>{heading}</h2>
      <div className={styles.textArea}>{children}</div>
    </>
  );
};

export default BoxArea;
