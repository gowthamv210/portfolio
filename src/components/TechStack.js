import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

import { motion } from "framer-motion";

import styles from "./TechStack.module.css";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [5, -5],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export default function TechStack() {
  return (
    <div className={styles.stackContainer}>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
      >
        Tech Stack
      </motion.h1>
      <div className={styles.stackList}>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className={styles.stackItem}
        >
          <FaHtml5
            style={{ fontSize: "4.5rem", lineHeight: "1", color: "#E34F26" }}
          />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className={styles.stackItem}
        >
          <FaCss3
            style={{ fontSize: "4.5rem", lineHeight: "1", color: "#1572B6" }}
          />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className={styles.stackItem}
        >
          <IoLogoJavascript
            style={{ fontSize: "4.5rem", lineHeight: "1", color: "#F7DF1E" }}
          />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className={styles.stackItem}
        >
          <RiReactjsLine
            style={{ fontSize: "4.5rem", lineHeight: "1", color: "#61DAFB" }}
          />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className={styles.stackItem}
        >
          <FaPython
            style={{ fontSize: "4.5rem", lineHeight: "1", color: "#3776AB" }}
          />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className={styles.stackItem}
        >
          <FaJava
            style={{ fontSize: "4.5rem", lineHeight: "1", color: "#007396" }}
          />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className={styles.stackItem}
        >
          <FaNodeJs
            style={{ fontSize: "4.5rem", lineHeight: "1", color: "#339933" }}
          />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className={styles.stackItem}
        >
          <SiExpress
            style={{ fontSize: "4.5rem", lineHeight: "1", color: "#000000" }}
          />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className={styles.stackItem}
        >
          <BiLogoPostgresql
            style={{ fontSize: "4.5rem", lineHeight: "1", color: "#336791" }}
          />
        </motion.div>
      </div>
    </div>
  );
}
