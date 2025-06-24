"use client";

// Hero component with three videos and full-screen layout
export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Backgrounds */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          src="/videos/1.mp4"
        />
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover hidden"
          src="/videos/2.mp4"
        />
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover hidden"
          src="/videos/3.mp4"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Exceptional Experiences</h1>
          <p className="text-xl mb-6">
            Discover luxury properties, showcase your vision, and join our elite team.
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition">
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
}