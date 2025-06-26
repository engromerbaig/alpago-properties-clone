'use client';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { animateText } from './animations/animateText';

export default function Heading({
  text = '',
  spanText = '',
  spanColor = 'text-white',
  spanSize = '',
  spanFontWeight = 'font-black',
  color = 'text-white',
  size = 'text-60px',
  centered = true,
  fontWeight = 'font-bold',
  breakSpan = false,
  className = '',
  isAnimate = false,
}) {
  const headingRef = useRef(null);

  // Split text into parts around spanText
  const parts = spanText ? text.split(spanText) : [text];

  useEffect(() => {
    if (isAnimate && headingRef.current) {
      const cleanup = animateText(headingRef.current);
      return cleanup;
    }
  }, [isAnimate]);

  // Reconstruct text with proper spacing and line breaks
  const renderHeadingContent = () => {
    if (!spanText) {
      return (
        <span className={color}>
          {text}
        </span>
      );
    }

    return (
      <>
        {parts[0] && (
          <span className={color}>
            {parts[0]}
          </span>
        )}
        
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
        
        {parts[1] && (
          <span className={color}>
            {parts[1]}
          </span>
        )}
      </>
    );
  };

  return (
    <h1
      ref={headingRef}
      className={`${centered ? 'text-center' : ''} ${size} ${fontWeight} ${className}`}
      style={{
        wordBreak: 'normal',
        overflowWrap: 'break-word',
        whiteSpace: 'normal',
      }}
    >
      {renderHeadingContent()}
    </h1>
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
};