import React, { useState, useEffect } from "react";

import { studentEval } from "@/types/types";
import styles from "@/components/atoms/GoodBadButton/GoodBadButton.module.css";
import { AnimatePresence, motion } from "framer-motion";

type props = {
  id: string;
  initialEval: studentEval;
};

const GoodBadButton = ({ id, initialEval }: props) => {
  const [studentEval, setStudentEval] = useState<studentEval>();
  const [evalButtonStyles, setEvalButtonStyles] = useState<string>(styles.eval_button);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setStudentEval(initialEval);
    if (initialEval === "🙆") {
      setEvalButtonStyles(`${styles.good_button} ${styles.eval_button}`);
    } else if (initialEval === "🙅") {
      setEvalButtonStyles(`${styles.bad_button} ${styles.eval_button}`);
    } else if (initialEval === "🤷") {
      setEvalButtonStyles(`${styles.on_hold_button} ${styles.eval_button}`);
    }
  }, []);

  const handleClick = async (type: studentEval) => {
    await fetch("/api/addEval", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id, studentEval: type }),
    }).then(() => {
      setStudentEval(type);
      if (type === "🙆") {
        setEvalButtonStyles(`${styles.good_button} ${styles.eval_button}`);
      } else if (type === "🙅") {
        setEvalButtonStyles(`${styles.bad_button} ${styles.eval_button}`);
      } else if (type === "🤷") {
        setEvalButtonStyles(`${styles.on_hold_button} ${styles.eval_button}`);
      }
      setIsOpen(false);
    });
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.wrapper}>
      <button className={evalButtonStyles} onClick={() => handleOpen()}>
        {studentEval}
      </button>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              initial={{ top: "0rem", left: "0rem" }}
              animate={{ top: "-8rem", left: "0rem" }}
              exit={{ top: "0rem", left: "0rem" }}
              className={`${styles.good_button} ${styles.good_button_position}`}
              onClick={() => handleClick("🙆")}
            >
              🙆
            </motion.button>
            <motion.button
              initial={{ top: "0rem", left: "0rem" }}
              animate={{ top: "-7rem", left: "-7rem" }}
              exit={{ top: "0rem", left: "0rem" }}
              className={`${styles.on_hold_button} ${styles.on_hold_button_position}`}
              onClick={() => handleClick("🤷")}
            >
              🤷
            </motion.button>
            <motion.button
              initial={{ left: "0rem" }}
              animate={{ left: "-10rem" }}
              exit={{ left: "0rem" }}
              className={`${styles.bad_button} ${styles.bad_button_position}`}
              onClick={() => handleClick("🙅")}
            >
              🙅
            </motion.button>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GoodBadButton;
