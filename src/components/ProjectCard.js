// components/ProjectCard.js
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { GoArrowUpRight } from "react-icons/go";
import { FaPlus } from "react-icons/fa";

export default function ProjectCard({ name, image, link = "#", cardHeight='h-[400px]', isNews = false, date, month, year }) {
  const truncatedName = isNews && name.length > 40 ? name.slice(0, 40) + "..." : name;
  const formattedDate = isNews ? `${date}.${month}.${year}` : "";

  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <div className="group overflow-hidden relative transition-all duration-300 cursor-pointer">
        {/* Image */}
        <div className={`relative ${cardHeight} w-full overflow-hidden`}>
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Icon */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="bg-[#5B5B5B] rounded-full p-3 opacity-100 transition-opacity duration-300">
            {isNews ? (
              <FaPlus className="text-white text-2xl" />
            ) : (
              <GoArrowUpRight className="text-white text-2xl" />
            )}
          </div>
        </div>

        {/* Text + Date */}
        <div className="p-4 flex justify-between items-center">
          <h3 className="text-xl font-bold text-black">{truncatedName}</h3>
          {isNews && (
            <span className="text-sm text-gray-600">{formattedDate}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
