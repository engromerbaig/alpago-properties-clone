'use client';

import Image from 'next/image';
import Link from 'next/link';
import { GoArrowUpRight } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import Heading from './Heading';
import BodyText from './BodyText';

export default function ProjectCard({ 
  name, 
  image, 
  link = "#", 
  isNews = false, 
  date, 
  month, 
  year,
  dynamicHeight // This will be passed from HorizontalScroller
}) {
  const truncatedName = isNews && name.length > 40 ? name.slice(0, 40) + "..." : name;
  const formattedDate = isNews ? `${date}.${month}.${year}` : "";

  // Use dynamic height if provided, otherwise fallback to responsive viewport units
  const cardHeight = dynamicHeight 
    ? `${dynamicHeight}px` 
    : "h-[40vh] sm:h-[50vh] md:h-[55vh] lg:h-[58vh] 2xl:h-[73vh] max-h-[1000px] min-h-[300px]";

  return (
   <Link href={link} target="_blank" rel="noopener noreferrer">
  <div className="group overflow-hidden relative transition-all duration-300 cursor-pointer">
    
    {/* Image Wrapper + Centered Icon */}
    <div 
      className={`relative w-full overflow-hidden ${!dynamicHeight ? cardHeight : ''}`}
      style={dynamicHeight ? { height: `${dynamicHeight}px` } : {}}
    >
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-115"
        placeholder="blur"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Icon Container – Always centered inside the image area */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="bg-[#5B5B5B] rounded-full p-3 transition-transform duration-500 transform group-hover:scale-120">
          {isNews ? (
            <FaPlus className="text-white text-2xl" />
          ) : (
            <GoArrowUpRight className="text-white text-2xl" />
          )}
        </div>
      </div>
    </div>

    {/* Text + Date */}
    <div className="py-4 flex justify-start md:justify-between items-center">
      <Heading
        text={truncatedName}
        size="text-50px"
        centered={false}
        fontWeight="font-light"
        color="text-black"
      />

      {/* Date Block (Hidden Below md) */}
      {isNews && (
        <div className="hidden md:flex justify-between">
          <div className="flex items-start">
            <p className="font-light text-50px mt-0 text-black leading-none">
              {`${date}.${month}`}
            </p>
          </div>
          <div className="flex items-start">
            <BodyText text={year} size="text-xs" className="text-black leading-none ml-2" />
          </div>
        </div>
      )}
    </div>
  </div>
</Link>

  );
}