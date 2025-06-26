'use client';
import PropTypes from 'prop-types';

export default function Heading({
  text = '',
  spanText = '',
  spanColor = 'text-white',
  spanSize = '',
  spanFontWeight = 'font-black',
  color = 'text-white',
  size = 'text-5xl',
  centered = true,
  fontWeight = 'font-semibold',
  breakSpan = false,
  className = '',
}) {
  // Split text into parts around spanText
  const parts = spanText ? text.split(spanText) : [text];

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
};