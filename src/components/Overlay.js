'use client';
import CircularProgress from './animations/CircularProgress';
import NavigationArrows from './NavigationArrows';
import { OVERLAY_DATA } from '@/constants/overlays';
import Heading from './Heading';
import Container from './Container';

export default function Overlay({
  title,
  number,
  index,
  currentIndex,
  duration,
  onNext,
  onPrev,
  onProgressComplete,
}) {
  const isActive = index === currentIndex;

  return (
    <div className="absolute z-20 inset-0 flex flex-col justify-end py-10 md:py-0 text-white">
      {/* Single Heading - positioned differently for mobile vs desktop */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between w-full">
        {/* Heading container with responsive positioning */}
        <div className="flex flex-col items-center md:items-start w-full md:w-auto gap-2 md:gap-0">
          {console.log("Overlay rendering, currentIndex:", currentIndex)}
          <Heading 
            text={title} 
            isAnimate 
            className="leading-none" 
          />
          
          {/* Navigation arrows - only show on mobile */}
          <div className="w-full flex justify-end z-50 md:hidden">
            <NavigationArrows 
              onNext={onNext} 
              onPrev={onPrev} 
              currentIndex={currentIndex} 
              totalCount={OVERLAY_DATA.length} 
            />
          </div>
        </div>

        {/* Circular Progress - only show on desktop */}
        <div className="hidden md:block">
          <CircularProgress
            isActive={isActive}
            duration={duration || 20}
            number={number}
            totalCount={OVERLAY_DATA.length}
            onComplete={onProgressComplete}
          />
        </div>
      </div>
    </div>
  );
}