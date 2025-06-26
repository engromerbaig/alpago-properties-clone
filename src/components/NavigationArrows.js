import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function NavigationArrows({ onPrev, onNext, currentIndex, totalCount }) {
  return (
    <div className="flex flex-row gap-2">
      {/* Previous Arrow */}
      <button
        onClick={onPrev}
        className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors duration-200"
        aria-label="Previous slide"
      >
        <FaArrowLeft className="w-6 h-6 text-black" />
      </button>
      
      {/* Next Arrow */}
      <button
        onClick={onNext}
        className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors duration-200"
        aria-label="Next slide"
      >
        <FaArrowRight className="w-6 h-6 text-black" />
      </button>
    </div>
  );
}