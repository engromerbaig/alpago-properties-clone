'use client';
import { useEffect, useRef, useState } from 'react';

/**
 * Hero Section Component
 * - Plays 3 videos in a loop
 * - Displays unique overlay content for each video
 * - Optimized for Next.js with clean practices
 */
export default function Hero() {
  const videoRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedVideos, setLoadedVideos] = useState(new Set());
  
  const overlays = [
    {
      title: 'Not Just Exceptional Experiences',
      description: 'Discover luxury properties, showcase your vision, and join our elite team.',
      button: 'Explore Now',
    },
    {
      title: 'Work With the Best',
      description: 'We help talents thrive in a fast-paced creative environment.',
      button: 'Join Our Team',
    },
    {
      title: 'Innovation Meets Design',
      description: 'From ideas to execution, we bring your vision to life.',
      button: 'Get Started',
    },
  ];

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
      setCurrentIndex((prev) => (prev + 1) % overlays.length);
    };

    currentVideo.addEventListener('ended', handleEnded);
    playVideo();

    return () => {
      currentVideo.removeEventListener('ended', handleEnded);
    };
  }, [currentIndex, overlays.length]);

  const handleVideoLoad = (videoId) => {
    setLoadedVideos(prev => new Set([...prev, videoId]));
  };

  const handleVideoError = (e, videoId) => {
    console.error(`Video ${videoId} failed to load:`, e);
  };

  return (
    <section className="relative z-20 min-h-screen flex flex-col">
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
            onLoadedData={() => handleVideoLoad(id)}
            onError={(e) => handleVideoError(e, id)}
            className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-700 ease-in-out ${
              currentIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}
      </div>

      {/* Overlay Content */}
      <div className="relative z-20 flex items-center justify-center h-full bg-black bg-opacity-40 text-white px-4 text-center">
        <div>
          <h1 className="text-5xl font-bold mb-4">{overlays[currentIndex].title}</h1>
          <p className="text-xl mb-6">{overlays[currentIndex].description}</p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition">
            {overlays[currentIndex].button}
          </button>
        </div>
      </div>

      {/* Loading State - Removed for immediate display */}
    </section>
  );
}