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
  onProgressComplete 
}) {
  const isActive = index === currentIndex;

  return (
    <div className="absolute z-20 inset-0 flex items-end justify-between text-white">

      <Heading
      text={title}
      size='text-6xl'
      isAnimate
      />
      
      {/* Desktop: Circular Progress (md and above) */}
      <div className="hidden md:block">
        <CircularProgress
          isActive={isActive}
          duration={duration || 20 }
          number={number}
          totalCount={OVERLAY_DATA.length}
          onComplete={onProgressComplete}
        />
      </div>
      
      {/* Mobile: Navigation Arrows (below md) */}
      <div className="block md:hidden">
        <NavigationArrows
          onNext={onNext}
          onPrev={onPrev}
        />
      </div>
    </div>
  );
}