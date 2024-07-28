import { Link } from "react-scroll";
import { IoIosArrowForward } from "react-icons/io";
import styles from "./HomePage.module.css";
import TechStack from "./TechStack";
import TypeWriter from "./TypeWriter";

export default function HomePage() {
  return (
    <div className={styles.homeBox} id="hero">
      <div className={styles.homeProfile}>
        <div className={styles.homeBrief}>
          <h3>Hey there !</h3>
          <div className={styles.textContainer}>
            <h1>
              I'M <span style={{ color: "#88ce52" }}>GOWTHAM V</span> ,
            </h1>
          </div>
          <br></br>

          <TypeWriter />

          <p>
            A passionate front-end react developer based in Chennai, India
            <img
              className={styles.locationPin}
              src="images/locationpin.png"
              alt="location_pin"
            />
          </p>

          <div
            className={styles.letsConnect}
            style={{ display: "inline-block" }}
          >
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <h4>LET'S CONNECT </h4>
              <IoIosArrowForward
                style={{ fontSize: "1.5rem", margin: "0.7rem" }}
              />
            </Link>
          </div>
        </div>
        <img className={styles.myPic} src="images/my_pic.png" alt="My_Pic" />
      </div>
      <div className={styles.skills}>
        <TechStack />
      </div>
    </div>
  );
}
