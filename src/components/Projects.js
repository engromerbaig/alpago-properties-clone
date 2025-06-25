'use client';
import { theme } from "@/theme";
import Container from "./Container";
import Heading from "./Heading";
import { PROJECTS_DATA } from "@/contsants/projects";
import Image from "next/image";

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

const ProjectCard = ({ name, image }) => (
  <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-lg">
    <Image
      src={image}
      alt={name}
      fill
      className="object-cover"
      placeholder="blur" // Optional: if you want blur-up effect
      sizes="(max-width: 768px) 100vw, 50vw"
    />
    <div className="absolute inset-0 bg-black/30 flex items-end p-4">
      <h3 className="text-xl font-bold text-white">{name}</h3>
    </div>
  </div>
);