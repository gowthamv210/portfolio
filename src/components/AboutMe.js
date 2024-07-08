import SocialHandle from "./SocialHandle";
import styles from "./AboutMe.module.css";
import { FaArrowRightLong } from "react-icons/fa6";

export default function AboutMe() {
  return (
    <div id="about" className={styles.aboutMe_box}>
      <div className={styles.headerBox}>
        <div className={styles.headerLine}></div>
        <h3>
          About<span style={{ color: "#88ce52" }}>.</span>
        </h3>
      </div>
      <div className={styles.aboutMe_info}>
        <h4>About Me in 10 Seconds</h4>
        <div className={styles.aboutMe_container}>
          <img
            className={styles.displayPic}
            src="images/devImg.png"
            alt="displayPic"
          />
          <div className={styles.aboutMe_details}>
            <p>
              Hello! I'm Gowtham V, Final year Computer Science undergraduate at
              SASTRA University. Passionate about web technologies to create
              innovative web solutions. Also interested in competitive
              programming and algorithmic challenges, proficient in Python for
              problem-solving. Proficient in PERN stack with a focus on
              front-end development. Actively seeking opportunities and
              Dedicated to staying updated with the latest trends in the tech
              world.
            </p>
            <h3
              style={{
                display: "flex",
                flexDirection: "row",

                alignItems: "center",
              }}
            >
              My links <FaArrowRightLong style={{ margin: "10px" }} />{" "}
              <SocialHandle />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
