import React from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "../constants/index";

export default function ProjectList() {
  return (
    <div>
      <ul style={{ display: "flex", justifyContent: "center" }}>
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            description={project.description}
            mainUIUrl={project.mainUIUrl}
            sample1ImgUrl={project.sample1ImgUrl}
            sample2ImgUrl={project.sample2ImgUrl}
            githubLink={project.githubLink}
            LiveDemo={project.LiveDemo}
          />
        ))}
      </ul>
    </div>
  );
}
