import React, { useState, useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import styles from "./Projects.module.css";

export default function ProjectItem({
  title,
  index,
  description,
  mainUIUrl,
  sample1ImgUrl,
  sample2ImgUrl,
  githubLink,
  LiveDemo,
}) {
  const splitIndex = description.indexOf(". ") + 1;
  const firstPart = description.substring(0, splitIndex).trim();
  const secondPart = description.substring(splitIndex + 1).trim();

  const [currentImage, setCurrentImage] = useState(0);
  const images = [mainUIUrl, sample1ImgUrl, sample2ImgUrl];
  const intervalId = useRef(null);

  const startCarousel = () => {
    intervalId.current = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
  };

  const stopCarousel = () => {
    clearInterval(intervalId.current);
    setCurrentImage(0);
  };

  useEffect(() => {
    return () => clearInterval(intervalId.current);
  }, []);

  return (
    <div
      key={index}
      className={styles.projectCard}
      onMouseEnter={startCarousel}
      onMouseLeave={stopCarousel}
    >
      <div className={styles.carousel}>
        <div
          className={styles.carouselImages}
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {images.map((imgUrl, idx) => (
            <img
              key={idx}
              src={imgUrl}
              alt={`${title} ${idx + 1}`}
              className={styles.projectImage}
            />
          ))}
        </div>
      </div>
      <div className={styles.projectInfo}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <div
          className={styles.projectDescription}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <p>{firstPart}</p>
          <p>{secondPart}</p>
        </div>
        <h4>Project Links</h4>
        <div style={{ display: "flex", gap: "20px" }}>
          <a
            href={githubLink}
            className={styles.projectLinkText}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> <span>Source Code</span>
          </a>
          <a
            href={LiveDemo}
            className={styles.projectLinkText}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsBoxArrowUpRight /> <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
}
