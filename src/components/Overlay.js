'use client';
import CircularProgress from './animations/CircularProgress';
import NavigationArrows from './NavigationArrows';
import { OVERLAY_DATA } from '@/constants/overlays';
import Heading from './Heading';

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
      {/* Mobile Layout */}
      <div className="flex flex-col items-center w-full md:hidden gap-2">
        {console.log("Mobile Overlay rendering, currentIndex:", currentIndex)}
        <Heading text={title} size="text-90px" isAnimate />
        <div className="w-full flex justify-end z-50"> {/* High z-index for arrows */}
          <NavigationArrows onNext={onNext} onPrev={onPrev} currentIndex={currentIndex} totalCount={OVERLAY_DATA.length} />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex items-end justify-between w-full">
        <Heading text={title} size="text-90px" isAnimate />
        <CircularProgress
          isActive={isActive}
          duration={duration || 20}
          number={number}
          totalCount={OVERLAY_DATA.length}
          onComplete={onProgressComplete}
        />
      </div>
    </div>
  );
}