'use client';
import { theme } from "@/theme";
import Container from "./Container";
import Heading from "./Heading";
import { PROJECTS_DATA } from "@/constants/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="relative">
      {/* Solid Color Background */}
      <div className="absolute inset-0 z-0 h-[70%] bg-black" />
      <div className="absolute bottom-0 z-0 w-full h-[30%] bg-white" />
      
      {/* Content Container */}
      <Container className={`${theme.paddingVertical} relative z-10 h-full min-h-screen`}>
        <Heading
          text="PROJECTS"
          centered={false}
          className="pb-10 text-white"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard 
              key={index}
              name={project.name}
              image={project.image}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}