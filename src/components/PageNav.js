import { useState, useEffect } from "react";
import DownloadResume from "./DownloadResume.js";
import ThemeToggle from "./ThemeToggle.js";
import styles from "./PageNav.module.css";
import { Link } from "react-scroll";
import { IoMenu } from "react-icons/io5";

export default function PageNav() {
  const [isSticky, setSticky] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }

  const handleResize = () => {
    if (window.innerWidth >= 850) {
      setIsChecked(false);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className={isSticky ? styles.navSticky : styles.navbar}>
        <Link to="hero" spy={true} smooth={true} offset={-100} duration={100}>
          <h1 className={styles.logo} style={{}}>
            GV<span style={{ color: "#88ce52" }}>.</span>
          </h1>
        </Link>
        <div className={styles.navList}>
          <ul>
            <li>
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                CONTACT
              </Link>
            </li>{" "}
            <li>
              <DownloadResume />
            </li>
            <ThemeToggle />
          </ul>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            id={styles.sidebarActive}
          />

          <label
            htmlFor={styles.sidebarActive}
            className={styles.openSidebarButton}
          >
            <IoMenu className={styles.toggleBtn} style={{ fontSize: "2rem" }} />
          </label>
        </div>
      </nav>
      <div
        id={isChecked ? styles.overlay : ""}
        onClick={handleCheckboxChange}
        htmlFor={styles.sidebarActive}
      ></div>
      <div className={isChecked ? styles.navSidebarOpen : styles.navSidebar}>
        <div className={styles.closeBar}>
          <label
            htmlFor={styles.sidebarActive}
            className={styles.closeSidebarButton}
            style={{
              fontSize: "2.5rem",
            }}
          >
            &times;
          </label>
          <ThemeToggle />
        </div>
        <ul>
          <li>
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
              onClick={handleCheckboxChange}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
              onClick={handleCheckboxChange}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
              onClick={handleCheckboxChange}
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
              onClick={handleCheckboxChange}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
