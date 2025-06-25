'use client';
import Image from 'next/image';

export default function ProjectCard({ name, image }) {
  return (
    <div className="group overflow-hidden  transition-all duration-300 ">
      <div className="relative h-96 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className=" p-4">
        <h3 className="text-xl font-bold text-black">{name}</h3>
      </div>
    </div>
  );
}