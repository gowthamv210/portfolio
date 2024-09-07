import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import styles from "./SocialHandle.module.css";
export default function SocialHandle() {
  return (
    <div className={styles.socialContainer}>
      <a
        aria-label="mail"
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:gowthamv0210@gmail.com"
        className={styles.contactMe_link}
      >
        <MdMailOutline className={styles.mail_icon} />
      </a>
      <a
        aria-label="linkedin"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/gowthamv0210/"
      >
        <FaLinkedinIn className={styles.linkedin_icon} />
      </a>

      <a
        aria-label="Github"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/gowthamv210"
      >
        <FiGithub className={styles.github_icon} />
      </a>
      <a
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/__gowtham.02__/"
      >
        <FaInstagram className={styles.instagram_icon} />
      </a>
    </div>
  );
}
