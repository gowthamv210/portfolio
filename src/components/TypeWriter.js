import React, { useState, useEffect, useMemo } from "react";
import styles from "./TypeWriter.module.css";

export default function TypeWriter() {
  const texts = useMemo(() => ["Full-Stack Developer", "Tech Enthusiast"], []);

  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      setCurrentText((prevText) =>
        isDeleting
          ? fullText.substring(0, prevText.length - 1)
          : fullText.substring(0, prevText.length + 1)
      );

      if (!isDeleting && currentText === fullText) {
        setTypingSpeed(1000);
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      } else {
        setTypingSpeed(isDeleting ? 50 : 150);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [currentText, isDeleting, typingSpeed, loopNum, texts]);

  return (
    <div className={styles.typeWriter}>
      A <span className={styles.text}>{currentText}</span>
    </div>
  );
}
