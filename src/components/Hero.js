'use client';
import { useEffect, useRef, useState } from 'react';
import Overlay from './Overlay';
import { OVERLAY_DATA } from '@/contsants/overlays';
export default function Hero() {
  const videoRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoDurations, setVideoDurations] = useState({});

  const handleLoadedMetadata = (index, e) => {
    const video = e.target;
    setVideoDurations((prev) => ({
      ...prev,
      [index]: video.duration,
    }));
  };

  useEffect(() => {
    const currentVideo = videoRefs.current[currentIndex];
    if (!currentVideo) return;

    const playVideo = async () => {
      try {
        currentVideo.currentTime = 0;
        await currentVideo.play();
      } catch (error) {
        console.error('Error playing video:', error);
      }
    };

    const handleEnded = () => {
      setCurrentIndex((prev) => (prev + 1) % OVERLAY_DATA.length);
    };

    currentVideo.addEventListener('ended', handleEnded);
    playVideo();

    return () => {
      currentVideo.removeEventListener('ended', handleEnded);
    };
  }, [currentIndex]);

  return (
    <section className="relative z-10 min-h-screen flex flex-col">
      {/* Video Layer */}
      <div className="absolute inset-0">
        {[1, 2, 3].map((id, index) => (
          <video
            key={id}
            ref={(el) => (videoRefs.current[index] = el)}
            src={`/videos/${id}.mp4`}
            muted
            preload="metadata"
            playsInline
            className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-700 ease-in-out ${
              currentIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            onLoadedMetadata={(e) => handleLoadedMetadata(index, e)}
          />
        ))}
      </div>

      {/* Overlay */}
      {OVERLAY_DATA.map((item, index) =>
        index === currentIndex ? (
          <Overlay
            key={index}
            {...item}
            index={index}
            currentIndex={currentIndex}
            duration={videoDurations[index]}
          />
        ) : null
      )}
    </section>
  );
}
