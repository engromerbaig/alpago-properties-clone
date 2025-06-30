// components/Hero.jsx
'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Overlay from './Overlay';
import { OVERLAY_DATA } from '@/constants/overlays';
import { theme } from '@/theme';
import Container from './Container';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Loader from './utils/Loader';

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

export default function Hero() {
  const videoRefs = useRef([]);
  const overlayRef = useRef(null);
  const heroRef = useRef(null); // Ref for the Hero container
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoDurations, setVideoDurations] = useState({});
  const [videoLoaded, setVideoLoaded] = useState({});
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [showVideoFallback, setShowVideoFallback] = useState(false);
  const [hasFirstVideoStarted, setHasFirstVideoStarted] = useState(false);

  const handleCanPlay = (index) => {
    setVideoLoaded((prev) => ({
      ...prev,
      [index]: true,
    }));

    if (index === 0 && showLoader) {
      setShowVideoFallback(true);
      const boxes = document.querySelectorAll('.loader-box');
      gsap.timeline({
        defaults: { ease: 'power2.out' },
        onComplete: () => {
          setShowLoader(false);
        },
      }).to(boxes, {
        y: '-100%',
        duration: 0.8,
        stagger: { each: 0.1, from: 'end' },
      });
    }
  };

  const handleLoadedMetadata = (index, e) => {
    setVideoDurations((prev) => ({
      ...prev,
      [index]: e.target.duration,
    }));
  };

  const transitionToSlide = useCallback(
    (newIndex) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
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
    },
    [isTransitioning]
  );

  const handleNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % OVERLAY_DATA.length;
    transitionToSlide(nextIndex);
  }, [currentIndex, transitionToSlide]);

  const handlePrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + OVERLAY_DATA.length) % OVERLAY_DATA.length;
    transitionToSlide(prevIndex);
  }, [currentIndex, transitionToSlide]);

  const handleProgressComplete = useCallback(() => {
    handleNext();
  }, [handleNext]);

  useEffect(() => {
    const currentVideo = videoRefs.current[currentIndex];
    if (!currentVideo) return;

    const playVideo = async () => {
      try {
        gsap.set(overlayRef.current, { x: '100%' });
        currentVideo.currentTime = 0;
        currentVideo.muted = true;
        await currentVideo.play();
        setIsTransitioning(false);
      } catch (error) {
        console.error('Error playing video:', error);
        setIsTransitioning(false);
      }
    };

    playVideo();
  }, [currentIndex]);

  useEffect(() => {
    if (overlayRef.current) {
      gsap.set(overlayRef.current, { x: '100%' });
    }

    // GSAP ScrollTrigger to fade out Hero when footer is reached
    const footer = document.querySelector('footer'); // Select the footer
    if (heroRef.current && footer) {
      gsap.to(heroRef.current, {
        opacity: 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: footer,
          start: 'top bottom', // Start when footer top hits viewport bottom
          end: 'top 75%', // End when footer top is 75% up the viewport
          scrub: true, // Smoothly animate with scroll
        },
      });
    }

    return () => {
      // Clean up ScrollTrigger on component unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={heroRef} className="relative h-screen w-full">
      {showLoader && <Loader />}
      {showVideoFallback && !hasFirstVideoStarted && (
        <div className="absolute inset-0 z-30 bg-black">
          <img
            src="/video-fallback.webp"
            alt="Fallback"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <Container
        className={`relative z-10 h-screen flex flex-col overflow-hidden w-full ${theme.paddingVerticalMenu}`}
      >
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          {[1, 2, 3].map((id, index) => (
            <video
              key={id}
              ref={(el) => (videoRefs.current[index] = el)}
              src={`/videos/${id}.mp4`}
              muted
              preload={index === 0 ? 'auto' : 'metadata'}
              playsInline
              className="w-full h-full object-cover absolute inset-0"
              style={{
                opacity: currentIndex === index ? 1 : 0,
                zIndex: currentIndex === index ? 10 : 0,
                transition: 'opacity 0.3s ease-in-out',
              }}
              onLoadedMetadata={(e) => handleLoadedMetadata(index, e)}
              onCanPlay={() => handleCanPlay(index)}
              onPlaying={() => {
                if (index === 0 && !hasFirstVideoStarted) {
                  setHasFirstVideoStarted(true);
                  setShowVideoFallback(false);
                }
              }}
            />
          ))}
        </div>
        <div
          ref={overlayRef}
          className="absolute inset-0 w-full h-full bg-black z-15 pointer-events-none"
          style={{ transform: 'translateX(100%)' }}
        />
        <div className={`relative z-20 w-full h-full flex flex-col ${theme.paddingHorizontal}`}>
          <Overlay
            key={`overlay-${currentIndex}`}
            {...OVERLAY_DATA[currentIndex]}
            index={currentIndex}
            currentIndex={currentIndex}
            duration={videoDurations[currentIndex]}
            onNext={handleNext}
            onPrev={handlePrev}
            onProgressComplete={handleProgressComplete}
          />
        </div>
      </Container>
    </div>
  );
}