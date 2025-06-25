'use client';

import Image from 'next/image';
import Link from 'next/link';
import { GoArrowUpRight } from "react-icons/go";

export default function ProjectCard({ name, image, link = "#" }) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <div className="group overflow-hidden relative transition-all duration-300 cursor-pointer">
        {/* Image Section */}
        <div className="relative h-[400px] w-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Arrow Icon in Circular Container */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="bg-[#5B5B5B] rounded-full p-3 opacity-100 transition-opacity duration-300">
            <GoArrowUpRight className="text-white text-2xl" />
          </div>
        </div>

        {/* Text Label */}
        <div className="p-4">
          <h3 className="text-xl font-bold text-black">{name}</h3>
        </div>
      </div>
    </Link>
  );
}
