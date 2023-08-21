import React, { useState } from "react";

import styles from "@/components/atoms/GoodBadButton/GoodBadButton.module.css";

type statusType = "👍" | "👎" | "-";

const GoodBadButton = () => {
  const [status, setStatus] = useState<statusType>("-");
  const [statusButtonStyles, setStatusButtonStyles] = useState<string>(styles.status_button);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (type: statusType) => {
    if (type === "👍") {
      setStatus("👍");
      setStatusButtonStyles(styles.good_button);
      setIsOpen(false)
    } else if (type === "👎") {
      setStatus("👎");
      setStatusButtonStyles(styles.bad_button);
      setIsOpen(false)
    }
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.wrapper}>
      <button className={statusButtonStyles} onClick={() => handleOpen()}>
        {status}
      </button>
      {isOpen && (
        <>
          <button className={`${styles.good_button} ${styles.good_button_position}`} onClick={() => handleClick("👍")}>
            👍
          </button>
          <button className={`${styles.bad_button} ${styles.bad_button_position}`} onClick={() => handleClick("👎")}>
            👎
          </button>
        </>
      )}
    </div>
  );
};

export default GoodBadButton;
