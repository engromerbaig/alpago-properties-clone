'use client';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { animateText } from './animations/animateText';
import Image from 'next/image';
import rightArrowLong from '../assets/icons/arrow-right-long.svg';

export default function Heading({
  text = '',
  spanText = '',
  spanColor = 'text-white',
  spanSize = '',
  spanFontWeight = 'font-black',
  color = 'text-white',
  size = '', // optional — if not passed, fallback to responsive logic
  centered = true,
  fontWeight = 'font-normal',
  breakSpan = false,
  className = '',
  isAnimate = false,
  hasArrow = false, // ✅ new prop
}) {
  const headingRef = useRef(null);

  const responsiveSize = 'text-[48px] sm:text-[60px] md:text-[75px] 2xl:text-[102px]';
  const parts = spanText ? text.split(spanText) : [text];

  useEffect(() => {
    if (isAnimate && headingRef.current) {
      const cleanup = animateText(headingRef.current);
      return cleanup;
    }
  }, [isAnimate, text]);

  const renderHeadingContent = () => {
    if (!spanText) {
      return <span className={color}>{text}</span>;
    }

    return (
      <>
        {parts[0] && <span className={color}>{parts[0]}</span>}
        {breakSpan ? (
          <>
            <br />
            <span className={`${spanColor} ${spanSize} ${spanFontWeight} block`}>
              {spanText}
            </span>
          </>
        ) : (
          <span className={`${spanColor} ${spanSize} ${spanFontWeight}`}>
            {spanText}
          </span>
        )}
        {parts[1] && <span className={color}>{parts[1]}</span>}
      </>
    );
  };

  return (
    <div className="relative w-full">
      {hasArrow && (
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <Image
            src={rightArrowLong}
            alt="Arrow"
            className=""
          />
        </div>
      )}

      <h1
        ref={headingRef}
        className={`relative z-20 ${centered ? 'text-center' : ''} ${size || responsiveSize} ${fontWeight} ${className}`}
        style={{
          wordBreak: 'normal',
          overflowWrap: 'break-word',
          whiteSpace: 'normal',
        }}
      >
        {renderHeadingContent()}
      </h1>
    </div>
  );
}

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  spanText: PropTypes.string,
  spanColor: PropTypes.string,
  spanSize: PropTypes.string,
  spanFontWeight: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  centered: PropTypes.bool,
  fontWeight: PropTypes.string,
  breakSpan: PropTypes.bool,
  className: PropTypes.string,
  isAnimate: PropTypes.bool,
  hasArrow: PropTypes.bool, // ✅ new prop type
};

Heading.defaultProps = {
  hasArrow: false,
};
