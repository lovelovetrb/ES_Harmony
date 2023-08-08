import styles from "@/components/molecules/BoxArea/BoxArea.module.css";

type Props = {
  heading: string;
  children: React.ReactNode;
  adjust_height?: boolean;
};

const BoxArea = ({ heading, children, adjust_height }: Props) => {
  return (
    <>
      <h2 className={styles.heading}>{heading}</h2>
      <div className={`${styles.textArea} ${adjust_height && styles.adjust_height}`}>{children}</div>
    </>
  );
};

export default BoxArea;
