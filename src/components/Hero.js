'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import Overlay from './Overlay';
import { OVERLAY_DATA } from '@/constants/overlays';
import { theme } from '@/theme';
import Container from './Container';
import { gsap } from 'gsap';

export default function Hero() {
  const videoRefs = useRef([]);
  const overlayRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoDurations, setVideoDurations] = useState({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleLoadedMetadata = (index, e) => {
    const video = e.target;
    setVideoDurations((prev) => ({
      ...prev,
      [index]: video.duration,
    }));
  };

  // Handle slide transition with overlay animation
  const transitionToSlide = useCallback((newIndex) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Animate black overlay from right to left
    gsap.to(overlayRef.current, {
      x: '0%',
      duration: 0.6,
      ease: 'power2.inOut',
      onComplete: () => {
        setCurrentIndex(newIndex);
        gsap.set(overlayRef.current, { x: '100%' });
        setIsTransitioning(false);
      },
    });
  }, [isTransitioning]);

  // Navigation functions
  const handleNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % OVERLAY_DATA.length;
    transitionToSlide(nextIndex);
  }, [currentIndex, transitionToSlide]);

  const handlePrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + OVERLAY_DATA.length) % OVERLAY_DATA.length;
    transitionToSlide(prevIndex);
  }, [currentIndex, transitionToSlide]);

  // Handle progress completion (for desktop circular progress)
  const handleProgressComplete = useCallback(() => {
    handleNext();
  }, [handleNext]);

  useEffect(() => {
    const currentVideo = videoRefs.current[currentIndex];
    if (!currentVideo) return;

    const playVideo = async () => {
      try {
        // Ensure overlay is hidden initially
        if (overlayRef.current) {
          gsap.set(overlayRef.current, { x: '100%' });
        }
        
        // Reset video and play
        currentVideo.currentTime = 0;
        currentVideo.muted = true; // Ensure muted for autoplay
        await currentVideo.play();
        
        // Reset transitioning state after video starts
        setIsTransitioning(false);
      } catch (error) {
        console.error('Error playing video:', error);
        setIsTransitioning(false);
      }
    };

    playVideo();
  }, [currentIndex]);

  return (
    <Container className={`relative z-10 h-screen flex flex-col w-full ${theme.paddingVerticalMenu} overflow-x-hidden`}>
      {/* Video Layer */}
      <div className="absolute inset-0 w-full h-full">
        {[1, 2, 3].map((id, index) => (
          <video
            key={id}
            ref={(el) => (videoRefs.current[index] = el)}
            src={`/videos/${id}.mp4`}
            muted
            preload="metadata"
            playsInline
            className="w-full h-full object-cover absolute inset-0"
            style={{
              opacity: currentIndex === index ? 1 : 0,
              zIndex: currentIndex === index ? 10 : 0,
              transition: 'opacity 0.3s ease-in-out',
            }}
            onLoadedMetadata={(e) => handleLoadedMetadata(index, e)}
          />
        ))}
      </div>

      {/* Black Overlay for Transitions */}
      <div
        ref={overlayRef}
        className="absolute inset-0 w-full h-full bg-black z-15 pointer-events-none"
      />

      {/* Content Wrapper */}
      <div className={`relative z-20 w-full h-full flex flex-col ${theme.paddingHorizontal}`}>
        {OVERLAY_DATA.map((item, index) =>
          index === currentIndex ? (
            <Overlay
              key={index}
              {...item}
              index={index}
              currentIndex={currentIndex}
              duration={videoDurations[index]}
              onNext={handleNext}
              onPrev={handlePrev}
              onProgressComplete={handleProgressComplete}
            />
          ) : null
        )}
      </div>
    </Container>
  );
}